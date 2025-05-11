import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
function Footer() {
  return (
    <div className="container " style={{ padding: "0" }}>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        ></section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img src={logo} alt="logo" style={{ width: "100px" }} />

                <p style={{ color: "#3881ff" }}>
                  Investara is a platform for Investors to invest in startups
                  and Entrepreneurs to showcase their startups and get funding
                  according to their needs.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    MDWordPress
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Bootstrap Angular
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> A-603 , Boys Hostel 3 ,
                  Vit Bhopal
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@investara.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 91 XXXXX XXXXX
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 91 XXXXX XXXXX
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright :{" "}
          <Link className="text-white" to="/">
            Investara
          </Link>
        </div>
        <div
          className="text-center "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Made with{" "}
          <span style={{ color: "red", fontSize: "1.5rem" }}>&hearts; </span> by
          Team Investara
        </div>
      </footer>
    </div>
  );
}

export default Footer;
