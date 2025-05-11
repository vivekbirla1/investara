import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import Alert from "../../src/components/Alert";
function Login() {
  const navigate = useNavigate();

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

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  async function handleLogin() {
    console.warn("email , password ", email, password);
    let result = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      if (result.usertype === "Investor") {
        navigate("/investors");
      } else {
        navigate("/founders");
      }
    } else {
      alert("please enter correct details");
    }
  }

  return (
    <div>
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
                  className="card vh-80"
                  style={{
                    opacity: "0.87",
                    borderRadius: "15px",
                    backgroundColor: "white",
                  }}
                >
                  <div className="card-body p-5">
                    {/* <Alert alert={alert} /> */}
                    <h2 className=" text-center">Login</h2>
                    <form
                      name="loginForm"
                      className="px-md-2 "
                      autoComplete="off"
                      method="post"
                      onSubmit={handleSubmit}
                    >
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
                          id="form3Example4cg"
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

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block btn-lg text-light mt-5"
                          onClick={() => {
                            handleLogin();
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <div className="my-3">
                        {" "}
                        Don't have an account yet ?{"  "}
                        <Link to="/signup"> Create Account</Link>
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

export default Login;
