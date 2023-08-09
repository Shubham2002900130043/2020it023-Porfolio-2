import React from "react";

export default function NavLayout() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> <img src="logo.png" alt="logo" width="30" height="24"
            className="d-inline-block align-text-top"/>
          Pro-Dev 1.0 Training
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Week1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Week2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Week3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Week4</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
      <Outlet />
    </>
  );
}
