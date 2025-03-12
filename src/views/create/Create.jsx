import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createApi } from '../../services/CreateApi';


function Post() {

  const [responseData, setResponseData] = useState('');

  const initialValues = {
    title: '',
    body: '',
    userId: '',
  };


  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required!'),
    body: Yup.string().required('Body is required!'),
    userId: Yup.number()
      .required('UserId is required!')
      .positive('UserId must be a positive number!')
      .integer('UserId must be an integer!'),
  });

  const handleSubmit = async (values) => {
    console.log('values :', values);

    // Desturctureing form values
    const { title, body, userId } = values;

    try {
      const response = await createApi({ title, body, userId }); // Pass the entire form values to postApi
      toast.success('Data created successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.log('response create :', response?.data);
      setResponseData(response?.data);
    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error posting data!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col">
      {/* Toast Container */}
      <ToastContainer />
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">
              SkillUp Academy
            </div>
          </Link>
          <div></div>
        </nav>
      </header>

      <div className="mt-5 text-center">
        <h1 className="text-2xl font-semibold">Post operation : POST API</h1>
      </div>

      <div className="container mx-auto p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-md mx-auto mt-8">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title:
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter Title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="body"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Body:
                </label>
                <Field
                  as="textarea"
                  id="body"
                  name="body"
                  placeholder="Enter Body"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="body"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="userId"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  UserId:
                </label>
                <Field
                  type="number"
                  id="userId"
                  name="userId"
                  placeholder="Enter UserId"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="userId"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submiting...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className='py-5'>
          {responseData && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Response Data</h2>
              <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
                {JSON.stringify(responseData, null, 2)}
              </pre>
            </div>
          )}
      </div>

    </div>
  );
}

export default Post;