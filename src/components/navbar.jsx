import React, {Component} from "react";

export default class NavBar extends Component {
  //   state = {};   //Stateless
  render() {
    return (
      // <!-- As a link -->
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

// export default Navbar;
