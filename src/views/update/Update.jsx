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
      toast.success('Data updated (PUT API) successfully!', { position: 'top-right', autoClose: 3000 });
      alert(JSON.stringify(response?.data))
    } catch (error) {
      toast.error('Error updating data (PUT API)!', { position: 'top-right', autoClose: 3000 });
      console.error('Error updating data:', error);
    }
  }

  const handlePatchSubmit = async (values) => {
    const { userId, title } = values;
    try {
      const response = await patchApi({ userId, title });
      toast.success('Data updated (PATCH API) successfully!', { position: 'top-right', autoClose: 3000 });
      alert(JSON.stringify(response?.data))
    } catch (error) {
      console.error('Error updating data:', error);
      toast.error('Error updating data (PATCH API)!', { position: 'top-right', autoClose: 3000 });
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
        <h1 className="text-2xl font-semibold">Update Operation : PUT & PATCH API</h1>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* PUT API Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">PUT API</h4>
            <p className='text-sm text-gray-600 mb-1'>• Requires complete body of the resource to be updated</p>
            <p className='text-sm text-gray-600 mb-1'>• Creates a new resource if it does not exist</p>
            <p className='text-sm text-gray-600 mb-4'>• The entire resource is replaced</p>
            <hr className='mb-6 border-gray-300' />
            <Formik initialValues={initialPutValues} onSubmit={handlePutSubmit}>
              <Form className="space-y-6">
                <div>
                  <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID:</label>
                  <Field
                    type="number"
                    id="id"
                    name="id"
                    disabled
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-gray-100 text-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID:</label>
                  <Field
                    type="number"
                    id="userId"
                    name="userId"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <ErrorMessage name="userId" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body:</label>
                  <Field
                    as="textarea"
                    id="body"
                    name="body"
                    rows="2"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <ErrorMessage name="body" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-semibold transition duration-300"
                >
                  Update via PUT
                </button>
              </Form>
            </Formik>
          </div>

          {/* PATCH API Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">PATCH API</h4>
            <p className='text-sm text-gray-600 mb-1'>• Faster update as only changed fields are sent</p>
            <p className='text-sm text-gray-600 mb-4'>• Only the unique attribute fields are updated</p>
            <hr className='mb-6 border-gray-300' />
            <Formik initialValues={initialPatchValues} onSubmit={handlePatchSubmit}>
              <Form className="space-y-6">
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID:</label>
                  <Field
                    type="number"
                    name="userId"
                    id="userIdPatch"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <ErrorMessage name="userId" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                  <Field
                    type="text"
                    name="title"
                    id="titlePatch"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold transition duration-300"
                >
                  Update via PATCH
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
