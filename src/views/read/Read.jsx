import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { readApi } from '../../services/ReadApi';


function Read() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await readApi();
      console.log('response :', response?.data);

      setData(response?.data);
      setLoading(false);

      // Show success toast
      toast.success('Data loaded successfully!', { position: 'top-right', autoClose: 3000 });
    } catch (error) {
      setLoading(false);

      // Show error toast instead of rendering error message
      toast.error('Failed to load data!', { position: 'top-right', autoClose: 3000 });
    }
  };


  // Define columns for DataTable
  const columns = [
    {
      name: 'Post ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Body',
      selector: (row) => row.body,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to={'/'}>
              <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
            </Link>
            <div></div>
          </nav>
        </header>
        <div className="flex justify-center items-center" style={{ height: '100vh' }}>
          <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Toast Container */}
      <ToastContainer />

      {/* Header/Navigation */}
      <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <div></div>
        </nav>
      </header>

      <div className="text-center mt-6">
        <h1 className="text-2xl font-semibold mb-4">Read operation : GET API</h1>
        {/* DataTable */}
        {data && (
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            persistTableHead
            pagination
          />
        )}
      </div>


    </div>
  )
}

export default Read