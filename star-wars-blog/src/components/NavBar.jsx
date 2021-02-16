
import React from "react"
import Favorites from "./Favorites"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/starwarslogo.png" alt="Star Wars" style={{width: "45px", height:"40px"}}/>
                </a>
                {/* <a className="navbar-brand text-white" href="">{props.brand}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                   <Favorites/>
                </div>
        </nav>
       )
}

export default Navbar