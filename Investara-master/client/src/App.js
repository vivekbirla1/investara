import "./App.css";
import Navbar from "../../client/src/components/Navbar";
import Hero from "../../client/src/components/Hero";
import Features from "../../client/src/components/Features";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../../client/src/components/Signup";
import React from "react";
import Sophisticatedinvestor from "./components/Sophisticated_investor";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Login from "./components/Login";
import PrivateComponent from "./components/PrivateComponent";
import Founders from "./components/Founders";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
// import Pitch from "./components/Pitch";

// import { useState } from "react";

function App() {
  const styles = { height: "100vh" };
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Contact />
              </>
            }
          />
          <Route element={<PrivateComponent />}>
            <Route exact path="/profile" element={<Profile />} />

            <Route
              exact
              path="/investors"
              element={<h1 style={styles}>For Investors</h1>}
            />
            <Route exact path="/founders" element={<Founders />} />
          </Route>
          {/* <Route exact path="/resources" element={<Resource />} /> */}
          <Route
            exact
            path="/sophisticated_OR_professional_investor"
            element={<Sophisticatedinvestor />}
          />
          <Route exact path="/terms_&_conditions" element={<Terms />} />
          <Route exact path="/logout" element={<Signup />} />
          <Route
            exact
            path="/About"
            element={
              <>
                <About />
              </>
            }
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<h1>Profile Section</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
