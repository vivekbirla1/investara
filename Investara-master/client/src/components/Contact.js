import React, { useState } from "react";
import customer from "./assets/customer.png";

import "./contact.css";
export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  async function collectData() {
    let result = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });
    result = await result.json();
    console.log(result);
    setEmail("");
    setName("");
    setMessage("");
  }

  async function handleFeedback() {
    if (
      document.forms["contactForm"]["name"].value === "" ||
      document.forms["contactForm"]["email"].value === "" ||
      document.forms["contactForm"]["message"] === ""
    ) {
      alert("Please fill all details so that our team can contact you");
    } else {
      alert("Our team will contact you shortly");
      collectData();
    }
  }

  return (
    <div
      className="py-3"
      style={{
        background: "#C4DFE6" /* fallback for old browsers */,
      }}
    >
      <div className="py-5 ">
        <h1 className=" font-weight-bold text-center text-dark ">Contact Us</h1>
        <h3 className="text-center p-3 " style={{ color: "#3E363F" }}>
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </h3>
      </div>
      <div
        className="contact text-light"
        style={{
          overflow: "hidden",
          display: "flex",
        }}
      >
        <img src={customer} alt="cutomer text" />
        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        <div className="mx-auto">
          <form
            name="contactForm"
            className="row text-dark contact_form"
            autoComplete="off"
            method="post"
            action="/contact"
            onSubmit={handleSubmit}
          >
            <input
              autoComplete="false"
              type="text"
              id="form3Example3cg"
              className="form-control form-control-md my-3"
              name="name"
              required
              placeholder="Full Name*"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              autoComplete="false"
              type="email"
              id="form3Example3cg"
              className="form-control form-control-md my-3"
              name="email"
              required
              placeholder="Email Address*"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <textarea
              className="form-control my-3"
              id="long"
              rows="6"
              placeholder="Write your message ..."
              value={message}
              required
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <button
              type="submit"
              className="btn btn-success btn-lg text-light mb-5"
              style={{ width: "50%", margin: "auto " }}
              onClick={handleFeedback}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
