import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const Information = () => {
  return (
    <div>
      <NavBar />
      <NavLink to="/" activeStyle={{
        fontWeight: "bold",
        color: "red"
    }}>
          Back to Star Wars Home
      </NavLink>
      <img
        src="https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg"
        className="card-img-top"
        alt="Luke"
        style={{width: "500px", height: "300px"}}
      />
      <h3 className="information" style={{ color: "white" }}>
        Lorep Ipsum Information from the character
      </h3>
    </div>
  );
};

export default Information;
