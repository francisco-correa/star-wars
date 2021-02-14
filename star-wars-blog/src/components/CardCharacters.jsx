import React from "react";

const CardCharacters = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "black" }}>
          {props.name}
        </h5>
        <p className="card-text" style={{ color: "black" }}>
          {props.description}
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.gender}</li>
          <li className="list-group-item">{props.hair_color}</li>
          <li className="list-group-item">{props.skyn_color}</li>
        </ul>
        <a type="button" href="#" className="btn btn-outline-primary">
          Learn More!
        </a>
        <a href="#" className="card-link">
          <i className="fa fa-heart"></i>
        </a>
      </div>
    </div>
  );
};
export default CardCharacters;
