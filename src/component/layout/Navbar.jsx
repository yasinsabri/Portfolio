import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container pt-3">
          <a className="navbar-brand" href="/">
            MYS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  gap-4 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active">Contact</a>
              </li>
            </ul>
            <form className="d-flex nav-sec" role="search">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
