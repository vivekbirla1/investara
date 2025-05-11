import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Alert from "./Alert";

function Signup() {
  const navigate = useNavigate();
  const [usertype, setUsertype] = useState("Investor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [alert, setAlert] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };
  const auth = localStorage.getItem("user");

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  });

  async function collectData() {
    console.warn(usertype, name, email, password);
    let result = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usertype, name, email, password }),
    });

    result = await result.json();
    console.log(result);
  }

  async function handleSignup() {
    if (usertype === "investor") {
      if (
        document.forms["myForm"]["fullname"].value === "" ||
        document.forms["myForm"]["email"].value === "" ||
        document.forms["myForm"]["password"].value === "" ||
        document.forms["myForm"]["checkbox1"].checked === false ||
        document.forms["myForm"]["checkbox2"].checked === false
      ) {
        alert(" Please fill all the necessary details to Signup");
      } else {
        alert(" Signup Successful ,  Please login");
        collectData();
        navigate("/login");
      }
    } else if (usertype === "Entrepreneur") {
      if (
        document.forms["myForm"]["fullname"].value === "" ||
        document.forms["myForm"]["email"].value === "" ||
        document.forms["myForm"]["password"].value === "" ||
        document.forms["myForm"]["checkbox2"].checked === false
      )
        alert(" Please fill all the necessary details to Signup");
      else {
        alert(" Signup Successful , Please login");
        collectData();
        navigate("/login");
      }
    }
  }

  return (
    <div style={{ padding: "0 ", margin: "0" }}>
      <section
        className="vh-100 bg-image "
        style={{
          overflow: "hidden",
          backgroundImage:
            "url('https://mergedmedia.blob.core.windows.net/cms/images/ca/101/0380_637599693130769636.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mask d-flex align-items-center h-100  ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card vh-90 "
                  style={{
                    opacity: "0.87",
                    borderRadius: "15px",
                    marginTop: "0",
                    backgroundColor: "white",
                  }}
                >
                  <div className="card-body p-5">
                    {/* <Alert alert={alert} /> */}
                    <h2 className=" text-center mb-2 ">Get Started Now!</h2>
                    {usertype === "Investor" ? (
                      <p className="text-muted text-center h5 my-4">
                        It's free to join and gain full access to thousands of
                        exciting investment opportunities.
                      </p>
                    ) : (
                      <p className="text-muted text-center h5 my-4">
                        It’s easy to create a pitch using our online form. Your
                        pitch can be in front of our investors before you know
                        it.
                      </p>
                    )}
                    <form
                      name="myForm"
                      className="px-md-2"
                      autoComplete="off"
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <div className="form-check flex my-2">
                          <input
                            style={{ marginRight: "0.3rem" }}
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="Entrepreneur"
                            onChange={(e) => {
                              setUsertype(e.target.value);
                            }}
                          />
                          I'm an Entrepreneur
                          <input
                            className="form-check-input "
                            style={{
                              marginLeft: "1rem",
                              marginRight: "0.3rem",
                            }}
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked
                            value="Investor"
                            onChange={(e) => {
                              setUsertype(e.target.value);
                            }}
                          />
                          I'm an Investor
                        </div>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          autoComplete="false"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-md"
                          name="fullname"
                          required
                          placeholder="Full Name*"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          autoComplete="false"
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-md"
                          name="email"
                          required
                          placeholder="Email Address*"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          autoComplete="false"
                          type="password"
                          className="form-control form-control-md"
                          name="password"
                          placeholder="Password*"
                          required
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div
                        className={`form-check ${
                          usertype === "Investor" ? null : "mb-5"
                        }`}
                      >
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          name="checkbox2"
                          value=""
                          required
                          defaultChecked
                        />
                        <label
                          className="form-check-label text-muted fs-6 "
                          htmlFor="form2Example3g"
                        >
                          I certify that I agree all statements in{" "}
                          <Link
                            to="/terms_&_conditions"
                            className="text-body"
                            target={"_blank"}
                          >
                            <u>Terms of service</u>
                          </Link>
                        </label>
                      </div>
                      {usertype === "Investor" ? (
                        <>
                          <div className="form-check  mb-4">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              name="checkbox1"
                              required
                              defaultChecked
                            />
                            <label
                              className="form-check-label text-muted fs-6 "
                              htmlFor="form2Example3g"
                            >
                              <Link
                                to="/sophisticated_OR_professional_investor"
                                className="text-body"
                                target={"_blank"}
                              >
                                <strong style={{ color: "blue" }}>
                                  I certify that i am a sophisticated or
                                  professional investor
                                </strong>
                              </Link>
                            </label>
                          </div>
                        </>
                      ) : null}
                      <div className="d-flex justify-content-center">
                        <button
                          type="button" //type button helped in resolving the error regarding form not connected
                          className="btn btn-primary btn-block btn-lg text-light"
                          onClick={() => {
                            handleSignup();
                          }}
                        >
                          Create New Account
                        </button>
                      </div>
                      <div className="my-3">
                        {" "}
                        Already have an account ?<Link to="/login">Login</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
