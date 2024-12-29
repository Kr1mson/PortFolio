import React from 'react'
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div>
      <h1>PROJECT</h1>
      <button className='buttton'>
        <Link to="/">Home
        </Link>
      </button>
      <button className='buttton'>
        <Link to="/about/about">About
        </Link>
      </button>
      <button className='buttton'>
        <Link to="/contact/contact">Contact
        </Link>
      </button>
    </div>
  )
}

export default Project
