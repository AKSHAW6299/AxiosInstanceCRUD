import React from 'react'
import { Link } from 'react-router-dom'


function Create() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <div></div>
        </nav>
      </header>

      <div></div>


    </div>
  )
}

export default Create