import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createApi } from '../../services/CreateApi';


function Post() {

  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState(false)

  const initialValues = {
    title: 'Rohit Sharma',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    userId: '123',
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
    // console.log('values :', values);

    // Desturctureing form values
    const { title, body, userId } = values;

    setLoading(true)

    try {
      const response = await createApi({ title, body, userId }); // Pass the entire form values to postApi
      toast.success('Data created successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setLoading(false)
      // console.log('response create :', response?.data);
      setResponseData(response?.data);
    } catch (error) {
      console.error('Error posting data:', error);
      setLoading(false)
      toast.error('Error posting data!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };


  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center" style={{ height: '100vh' }}>
  //       <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
  //     </div>
  //   );
  // }


  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Toast Container */}
      <ToastContainer />
      <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
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
        <h1 className="text-2xl font-semibold">Create operation : POST API</h1>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 py-8'>
        <div className="">
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
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

                <div className='flex justify-between w-full'>
                  <div></div>
                  <button
                    type="submit"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submiting...' : 'Submit'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className='text-center mt-3'>
          <h6 className="text-xl font-semibold mb-4">Response Data</h6>
          <div className='bg-gray-200'>
            <div style={{ height: '20px' }}></div>
            {loading && (
              <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin border-t-4 border-gray-500 border-solid rounded-full w-16 h-16"></div>
              </div>
            )}
            {responseData && (
              <>
                <p>Take this ID as refrence for future! </p>
                <pre className="p-4 rounded-lg overflow-x-auto">
                  {JSON.stringify(responseData, null, 2)}
                </pre>
              </>
            )}
            <div style={{ height: '220px' }}></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Post;