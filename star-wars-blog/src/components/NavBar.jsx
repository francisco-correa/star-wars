
import React from "react"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">Star wars</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
               aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <button type="button" data-target="#collapseNavbar" data-toggle="collapse" className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="collapseNavbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="">Favorites</a>
                  </li>
                </ul>
              </div>
        </div>
        </nav>
       )
}

export default Navbar