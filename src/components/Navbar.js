import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">{props.name}</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
