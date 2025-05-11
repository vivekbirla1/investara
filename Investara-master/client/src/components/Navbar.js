import { React } from "react";
import "../../src/components/navbar.css";
import "../../src/index.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ margin: 0, padding: 0 }}
    >
      <div className="container">
        <div className="company-logo navbar-brand mx-3">
          <Link to="/">
            {" "}
            <img src={logo} alt="company logo" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse align-items-center mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navigation navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link to="/investors" className=" nav-link hover-link">
                FOR INVESTORS
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/founders" className="nav-link hover-link">
                FOR FOUNDERS
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/resources" className=" nav-link hover-link">
                RESOURCES
              </Link>
            </li>
          </ul>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-3">
                <Link to="/About" className=" nav-link hover-link">
                  ABOUT US
                </Link>
              </li>
              {auth ? (
                <>
                  <li className="nav-item  ">
                    <Link to="/logout">
                      <button
                        className="btn btn-lg btn-login"
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link to="/profile">
                      <button className="btn btn-lg btn-signup ">
                        <img
                          src="https://wallpapercave.com/wp/wp11413617.png"
                          style={{ width: "2rem", marginBottom: "0.5rem" }}
                          alt="profile pic"
                        />
                        {JSON.parse(auth).name}
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item mx-3">
                    <Link to="/login">
                      <button className="btn btn-lg btn-login">Login</button>
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link to="/signup">
                      <button className="btn btn-light btn-lg btn-signup">
                        SignUp
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
