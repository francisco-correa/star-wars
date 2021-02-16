import React from "react";

const Favorites = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown ml-auto">
        <a
          className="nav-link dropdown-toggle"
          style={{ color: "white" }}
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="true"
        >
          Favorites
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item">Character 1</a>
          </li>
          <li>
            <a className="dropdown-item">Character 2</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Favorites