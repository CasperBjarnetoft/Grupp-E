import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-light bg-info">

        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <i className="fas fa-bars"></i>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <h1><Link className='text-light me-4' to="/">E-commerce</Link></h1>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/products">Products</Link>
              </li>
            </ul>

          </div>



          <div className="d-flex align-items-center">

            <Link className="text-reset me-3" to="/">
              <i className="fas fa-shopping-cart"></i>
            </Link>

            <div className="dropdown ">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="/"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="/">My profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">Settings</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">Logout</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar