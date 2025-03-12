import React from 'react';
import { Link } from 'react-router-dom';
import { deleteApi } from '../../services/DeleteApi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  queryParams: '',
};

function Delete() {
  const validationSchema = Yup.object({
    queryParams: Yup.number().required('QueryParams is required!').positive('QueryParams must be a positive number!'),
  });

  const handleDelete = async (values) => {
    try {
      const response = await deleteApi(values.queryParams);
      toast.success('Data deleted successfully!', { position: 'top-right', autoClose: 3000 });
      // console.log('response :', response?.data);
    } catch (error) {
      console.error('Error deleting data:', error);
      toast.error('Error deleting data!', { position: 'top-right', autoClose: 3000 });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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

      <div className='mt-5 text-center'>
        <h1 className="text-2xl font-semibold">Delete operation : DELETE API</h1>

      </div>

      <div className="container mx-auto p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleDelete}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-md mx-auto mt-8">
              <div className="mb-4">
                <label htmlFor="queryParams" className="block text-gray-700 text-sm font-bold mb-2">
                  Enter QueryParams:
                </label>
                <Field
                  type="number"
                  id="queryParams"
                  name="queryParams"
                  placeholder="Enter QueryParams"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="queryParams"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Deleting...' : 'Delete'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Delete;