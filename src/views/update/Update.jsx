import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { putApi } from '../../services/PutApi';
import { patchApi } from '../../services/PatchApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Update() {
  const initialPutValues = {
    id: 1,
    title: 'Rohit Sharma',
    body: 'Dummy Data',
    userId: 1,
  };

  const initialPatchValues = {
    userId: 1,
    title: 'Suresh Raina',
  };

  const handlePutSubmit = async (values) => {
    const { id, title, body, userId } = values;
    try {
      const response = await putApi({ id, title, body, userId });
      toast.success('Data updated (put api) successfully!', { position: 'top-right', autoClose: 3000 });
      // console.log('response', response?.data);
      alert(JSON.stringify(response?.data))
    } catch (error) {
      toast.error('Error updating data (put api)!', { position: 'top-right', autoClose: 3000 });
      console.error('Error updating data:', error);
    }
  }

  const handlePatchSubmit = async (values) => {
    const { userId, title } = values;
    try {
      const response = await patchApi({ userId, title });
      // console.log('response', response?.data);
      toast.success('Data updated (patch api) successfully!', { position: 'top-right', autoClose: 3000 });
      alert(JSON.stringify(response?.data))
    } catch (error) {
      console.error('Error updating data:', error);
      toast.error('Error updating data (patch api)!', { position: 'top-right', autoClose: 3000 });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toast Container */}
      <ToastContainer />
      <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Academy</div>
          </Link>
          <div></div>
        </nav>
      </header>

      <div className="mt-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Update Operation: PUT & PATCH API
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* PUT API Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-semibold mb-4 text-gray-700">PUT API</h4>
            <p className='mt-3 mb-2'>1) Requires complete body of the resource to be updated</p>
            <p className='mt-3 mb-2'>2) It will create a new resource if it does not exist</p>
            <p className='mt-3 mb-3'>3) The whole body replaced</p>
            <hr className='mb-5' />
            <Formik initialValues={initialPutValues} onSubmit={handlePutSubmit}>
              <Form className="space-y-4">
                <div>
                  <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                    ID:
                  </label>
                  <Field
                    type="number"
                    id="id"
                    name="id"
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-200"
                  />
                </div>

                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                    User ID:
                  </label>
                  <Field
                    type="number"
                    id="userId"
                    name="userId"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="userId"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title:
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                    Body:
                  </label>
                  <Field
                    as="textarea"
                    id="body"
                    name="body"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="body"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>

          {/* PATCH API Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-semibold mb-4 text-gray-700">PATCH API</h4>
            <p className='mt-3 mb-2'>1) Very Fast</p>
            <p className='mb-2'>2) We only send the <span className='font-bold'>field</span> with the <span className='font-bold'>unique attribute</span> to update</p>
            <hr className='mb-5' />
            <Formik initialValues={initialPatchValues} onSubmit={handlePatchSubmit}>
              <Form className="space-y-4">
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                    User ID:
                  </label>
                  <Field
                    type="number"
                    name="userId"
                    id="userIdPatch"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="userId"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title:
                  </label>
                  <Field
                    type="text"
                    name="title"
                    id="titlePatch"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;