import React from "react";
import "../../src/index.css";
import "./hero.css";
import { Link } from "react-router-dom";
// import background from "./assets/background_1.png";
export default function Hero() {
  return (
    <div>
      <section className="box">
        <header>
          <div className="mask align-items-center d=flex h-100">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
                  <div className="vh-80 text" style={{ marginTop: "10rem" }}>
                    <h1>
                      <span className="lets ">LET'S </span>
                      <span className="invest">INVEST </span>
                      <span className="together">TOGETHER</span>
                    </h1>
                    <div className="header-sub">
                      <Link to="/signup" style={{ width: "100%" }}>
                        <button className="btn butt btn-dark w-100 btn-lg my-4">
                          JOIN TO RAISE FUNDS
                        </button>
                      </Link>
                      <Link to="/signup" style={{ width: "100%" }}>
                        <button
                          type="button"
                          className="btn butt btn-dark btn-lg w-100"
                        >
                          JOIN TO INVEST
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      {/* <hr
        style={{
          width: "40%",
          margin: "auto",
          backgroundColor: "#fff",
          borderTop: "10px dotted rgb(100,200,100,1)",
        }}
      /> */}
    </div>
  );
}
