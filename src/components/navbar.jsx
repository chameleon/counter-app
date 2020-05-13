import React from "react";

//Stateless, Functional, Component
const NavBar = props => {
  //Can't use lifecycles hooks on Stateless Functional Components
  return (
    //   console.log({this.props});
    // <!-- As a link -->
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/#">
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
