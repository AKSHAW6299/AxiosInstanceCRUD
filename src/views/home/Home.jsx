import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <ul className="flex space-x-4">
            <li><a href="#cards" className="hover:text-blue-600">Features</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center p-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-4">
            CRUD using axios instances
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Streamline your workflow and achieve your goals with our intuitive API integration method
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full text-lg">
            Direct API Integration
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="bg-gray-100 p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">Explore Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Link to={"/create"}>
              <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Create</h3>
                <p className="text-gray-600">Create operation : POST API</p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to={"/read"}>
              <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Read</h3>
                <p className="text-gray-600">Read operation : GET API</p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to={"/update"}>
              <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10v11a2 2 0 002 2h14a2 2 0 002-2V10M3 10l7-4m7 4l-7-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Update</h3>
                <p className="text-gray-600">Update operation : PUT & PATCH API</p>
              </div>
            </Link>

            {/* Card 4 */}
            <Link to={"/delete"}>
              <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Delete</h3>
                <p className="text-gray-600">Delete operation : DELETE API</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">Contact Us</h2>
          <p className="text-gray-600">Have questions? Reach out to us!</p>
          {/* Add contact form or contact information here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} SkillUp Aacadmy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;