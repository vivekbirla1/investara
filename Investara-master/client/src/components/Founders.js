import React, { useState } from "react";
import "./founders.css";
import { useNavigate } from "react-router-dom";

function Founders() {
  const [description, setDescription] = useState("");
  const [pitchtitle, setPitchtitle] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("default");
  const [phone, setPhone] = useState("");
  const [industry1, setIndustry1] = useState("default");
  const [industry2, setIndustry2] = useState("default");
  const [stage, setStage] = useState("default");
  const [investorRole, setInvestorRole] = useState("default");
  const [raising, setRaising] = useState(0);
  const [raised, setRaised] = useState(0);
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");

  const handleAdd = (e) => {
    if (newMember.length > 0) {
      setMembers([...members, { text: newMember }]);
    }
    setNewMember("");
  };
  const handleDelete = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
    // console.log(event.target.value);
  };

  const handleRaised = (event) => {
    setRaised(event.target.value);
  };

  const handleRaising = (event) => {
    setRaising(event.target.value);
  };

  const handleInvestorRole = (event) => {
    setInvestorRole(event.target.value);
  };

  const handleStage = (event) => {
    setStage(event.target.value);
  };

  const handleIndustry2 = (event) => {
    setIndustry2(event.target.value);
  };

  const handleIndustry1 = (event) => {
    setIndustry1(event.target.value);
    // console.log(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
    // console.log(event.target.value);
  };

  const handleWebsite = (event) => {
    setWebsite(event.target.value);
  };

  const handlePitchTitle = (event) => {
    setPitchtitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const navigate = useNavigate();
  const auth = localStorage.getItem("Startup");
  if (auth) {
    navigate("/profile");
  }
  const handlePitchSubmit = (e) => {
    e.preventDefault();
  };

  let membersText = members.map((member) => member.text);
  async function collectData() {
    let result = await fetch("http://localhost:3001/founders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pitchtitle,
        website,
        location,
        phone,
        industry1,
        industry2,
        stage,
        investorRole,
        raising,
        raised,
        description,
        members: membersText,
      }),
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem("Startup", JSON.stringify(result));
  }
  async function handleFounderInfo() {
    if (
      document.forms["myForm"]["pitchTitle"].value === "" ||
      document.forms["myForm"]["location"].value === "" ||
      document.forms["myForm"]["phone"].value === "" ||
      document.forms["myForm"]["industry1"].value === "" ||
      document.forms["myForm"]["stage"].value === "" ||
      document.forms["myForm"]["investorRole"].value === "" ||
      document.forms["myForm"]["description"].value === ""
    ) {
      alert(" Please fill all the necessary details");
    } else {
      alert(" All details are submitted ,  Proceed to your Profile");
      collectData();
      navigate(`/profile`);
    }
    // let result = await fetch("http://localhost:3001/founders", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     pitchtitle,
    //     website,
    //     location,
    //     phone,
    //     industry1,
    //     industry2,
    //     stage,
    //     investorRole,
    //     raising,
    //     raised,
    //     description,
    //     members,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // result = await result.json();
    // console.log(result);
  }

  return (
    <div>
      <div>
        <h2
          className="text-center header_founder"
          style={{ marginTop: "2rem" }}
        >
          FOR FOUNDERS
        </h2>
        <div
          className="founders"
          style={{
            overflow: "hidden",
            display: "flex",
          }}
        >
          <div
            className="founders_img"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/1c/40/13/1c4013ee3fc0b5a88256b55193ff6f8b.png)",
              padding: "0",
              width: "50vw",
              height: "100% !important",
              alignContent: "center",
            }}
          ></div>
          <form
            method="post"
            className="row g-3  text-dark founders_form"
            style={{ padding: "1rem", width: "50vw" }}
            onSubmit={handlePitchSubmit}
            name="myForm"
          >
            <div className="col-12">
              <label className="form-label">Pitch Title :</label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                value={pitchtitle}
                onChange={handlePitchTitle}
                name="pitchTitle"
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Website (optional) :</label>
              <input
                type="url"
                className="form-control"
                value={website}
                id="inputWebsite"
                name="Website"
                onChange={handleWebsite}
              />
            </div>
            <div className="col-12">
              <label className="form-label">
                Where is management located ?
              </label>
              <select
                className="form-select"
                onChange={handleLocation}
                value={location}
                name="location"
              >
                <option value="default" disabled>
                  Please Select
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Phone Number :</label>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <input
                    type="number"
                    placeholder="+91"
                    className="form-control"
                    style={{ width: "4.5rem", paddingRight: "0" }}
                    disabled
                  />
                </div>
                <div className="p-2">
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhone}
                    style={{ paddingLeft: "0" }}
                    className="form-control "
                    maxLength={10}
                    name="phone"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Industry 1 :</label>
              <select
                className="form-select"
                value={industry1}
                onChange={handleIndustry1}
                name="industry1"
              >
                <option value="default" disabled>
                  Please Select
                </option>
                <option value="Agriculture">Agriculture</option>
                <option value="Business Services">Business Services</option>
                <option value="Education and Training">
                  Education and Training
                </option>
                <option value="Energy and Natural Resources">
                  Energy and Natural Resources
                </option>
                <option value="Entertainment and Leisure">
                  Entertainment and Leisure
                </option>
                <option value="Fashion and Beauty">Fashion and Beauty</option>
                <option value="Finance">Finance</option>
                <option value="Food and Beverage">Food and Beverage</option>
                <option value="Hospitality , Restaurant and Bars">
                  Hospitality , Restaurant and Bars
                </option>
                <option value="Manufacturing and Engineering">
                  Manufacturing and Engineering
                </option>
                <option value="Media">Media</option>
                <option value="Medical and Sciences">
                  Medical and Sciences
                </option>
                <option value="Personal Services">Personal Services</option>
                <option value="Products and Inventions">
                  Products and Inventions
                </option>
                <option value="Property">Property</option>
                <option value="Retail">Retail</option>
                <option value="Sales and Marketing">Sales and Marketing</option>
                <option value="Software">Software</option>
                <option value="Technology">Technology</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Industry 2 (optional) :</label>
              <select
                className="form-select"
                value={industry2}
                onChange={handleIndustry2}
                name="industry2"
              >
                <option value="default" disabled>
                  Please Select
                </option>
                <option value="Agriculture">Agriculture</option>
                <option value="Business Services">Business Services</option>
                <option value="Education and Training">
                  Education and Training
                </option>
                <option value="Energy and Natural Resources">
                  Energy and Natural Resources
                </option>
                <option value="Entertainment and Leisure">
                  Entertainment and Leisure
                </option>
                <option value="Fashion and Beauty">Fashion and Beauty</option>
                <option value="Finance">Finance</option>
                <option value="Food and Beverage">Food and Beverage</option>
                <option value="Hospitality , Restaurant and Bars">
                  Hospitality , Restaurant and Bars
                </option>
                <option value="Manufacturing and Engineering">
                  Manufacturing and Engineering
                </option>
                <option value="Media">Media</option>
                <option value="Medical and Sciences">
                  Medical and Sciences
                </option>
                <option value="Personal Services">Personal Services</option>
                <option value="Products and Inventions">
                  Products and Inventions
                </option>
                <option value="Property">Property</option>
                <option value="Retail">Retail</option>
                <option value="Sales and Marketing">Sales and Marketing</option>
                <option value="Software">Software</option>
                <option value="Technology">Technology</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>
            <div className="col-12 ">
              <label className="form-label">Stage :</label>
              <select
                className="form-select"
                value={stage}
                onChange={handleStage}
                name="stage"
              >
                <option value="default" disabled>
                  Please Select
                </option>
                <option value="Pre-Startup/R&D">Pre-Startup/R&D</option>
                <option value="MVP/Finished Product">
                  MVP/Finished Product
                </option>
                <option value="Achieving Sales">Achieving Sales</option>
                <option value="Breaking Even">Breaking Even</option>
                <option value="Profitable">Profitable</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* <div className="col-md-6">
              <label for="inputindustry" className="form-label">
                Ideal Investor Role :
              </label>
              <select className="form-select" defaultValue="default">
                <option value="default" disabled>
                  Please Select
                </option>
                <option value="Daily Involvement">Daily Involvement</option>
                <option value="Investor Role">Investor Role</option>
                <option value="Silent">Silent</option>
                <option value="Weekly Involvement">Weekly Involvement</option>
                <option value="Monthly Involvement">Monthly Involvement</option>
                <option value="Any">Any</option>
              </select>
            </div> */}
            <div className="col-12">
              <label className="form-label">Ideal Investor Role :</label>
              <select
                className="form-select"
                value={investorRole}
                onChange={handleInvestorRole}
                name="investorRole"
              >
                <option value="default" disabled>
                  Please Select
                </option>
                <option value="Daily Involvement">Daily Involvement</option>
                <option value="Weekly Involvement">Weekly Involvement</option>
                <option value="Monthly Involvement">Monthly Involvement</option>
                <option value="Silent">Silent</option>
                <option value="Any">Any</option>
              </select>
            </div>

            {/* <div className="col-md-4 ">
              <label for="inputindustry" className="form-label ">
                If you did a previous round , how much did you raise ? [INR]
              </label>

              <select className="form-select " defaultValue="default">
                <option value="0"> 0</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1,000</option>
                <option value="2500">2,500</option>
                <option value="5000">5,000</option>
                <option value="10000">10,000</option>
                <option value="15000">15,000</option>
                <option value="20000">20,000</option>
                <option value="25000">25,000</option>
                <option value="30000">30,000</option>
                <option value="40000">40,000</option>
                <option value="50000">50,000</option>
                <option value="60000">60,000</option>
                <option value="70000">70,000</option>
                <option value="80000">80,000</option>
                <option value="90000">90,000</option>
                <option value="100000">100,000</option>
                <option value="125000">125,000</option>
                <option value="150000">150,000</option>
                <option value="175000">175,000</option>
                <option value="200000">200,000</option>
                <option value="225000">225,000</option>
                <option value="250000">250,000</option>
                <option value="275000">275,000</option>
                <option value="300000">300,000</option>
                <option value="350000">350,000</option>
                <option value="400000">400,000</option>
                <option value="450000">450,000</option>
                <option value="500000">500,000</option>
                <option value="600000">600,000</option>
                <option value="700000">700,000</option>
                <option value="800000">800,000</option>
                <option value="900000">900,000</option>
                <option value="1000000">1,000,000</option>
                <option value="1500000">1,500,000</option>
                <option value="2000000">2,000,000</option>
                <option value="2500000">2,500,000</option>
                <option value="3000000">3,000,000</option>
                <option value="3500000">3,500,000</option>
                <option value="4000000">4,000,000</option>
                <option value="4500000">4,500,000</option>
                <option value="5000000">5,000,000</option>
                <option value="6000000">6,000,000</option>
                <option value="7000000">7,000,000</option>
                <option value="8000000">8,000,000</option>
                <option value="9000000">9,000,000</option>
                <option value="10000000">10,000,000</option>
              </select>
            </div> */}

            <div className="col-md-6 ">
              <label className="form-label ">
                How much are you raising in total? [INR]
              </label>

              <select
                className="form-select "
                value={raising}
                onChange={handleRaising}
                name="raising"
              >
                <option value="0"> 0</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1,000</option>
                <option value="2500">2,500</option>
                <option value="5000">5,000</option>
                <option value="10000">10,000</option>
                <option value="15000">15,000</option>
                <option value="20000">20,000</option>
                <option value="25000">25,000</option>
                <option value="30000">30,000</option>
                <option value="40000">40,000</option>
                <option value="50000">50,000</option>
                <option value="60000">60,000</option>
                <option value="70000">70,000</option>
                <option value="80000">80,000</option>
                <option value="90000">90,000</option>
                <option value="100000">100,000</option>
                <option value="125000">125,000</option>
                <option value="150000">150,000</option>
                <option value="175000">175,000</option>
                <option value="200000">200,000</option>
                <option value="225000">225,000</option>
                <option value="250000">250,000</option>
                <option value="275000">275,000</option>
                <option value="300000">300,000</option>
                <option value="350000">350,000</option>
                <option value="400000">400,000</option>
                <option value="450000">450,000</option>
                <option value="500000">500,000</option>
                <option value="600000">600,000</option>
                <option value="700000">700,000</option>
                <option value="800000">800,000</option>
                <option value="900000">900,000</option>
                <option value="1000000">1,000,000</option>
                <option value="1500000">1,500,000</option>
                <option value="2000000">2,000,000</option>
                <option value="2500000">2,500,000</option>
                <option value="3000000">3,000,000</option>
                <option value="3500000">3,500,000</option>
                <option value="4000000">4,000,000</option>
                <option value="4500000">4,500,000</option>
                <option value="5000000">5,000,000</option>
                <option value="6000000">6,000,000</option>
                <option value="7000000">7,000,000</option>
                <option value="8000000">8,000,000</option>
                <option value="9000000">9,000,000</option>
                <option value="10000000">10,000,000</option>
              </select>
            </div>
            <div className="col-md-6 ">
              <label className="form-label ">
                How much of this total have you raised? [INR]
              </label>

              <select
                className="form-select "
                value={raised}
                onChange={handleRaised}
                name="raised"
              >
                <option value="0"> 0</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1,000</option>
                <option value="2500">2,500</option>
                <option value="5000">5,000</option>
                <option value="10000">10,000</option>
                <option value="15000">15,000</option>
                <option value="20000">20,000</option>
                <option value="25000">25,000</option>
                <option value="30000">30,000</option>
                <option value="40000">40,000</option>
                <option value="50000">50,000</option>
                <option value="60000">60,000</option>
                <option value="70000">70,000</option>
                <option value="80000">80,000</option>
                <option value="90000">90,000</option>
                <option value="100000">100,000</option>
                <option value="125000">125,000</option>
                <option value="150000">150,000</option>
                <option value="175000">175,000</option>
                <option value="200000">200,000</option>
                <option value="225000">225,000</option>
                <option value="250000">250,000</option>
                <option value="275000">275,000</option>
                <option value="300000">300,000</option>
                <option value="350000">350,000</option>
                <option value="400000">400,000</option>
                <option value="450000">450,000</option>
                <option value="500000">500,000</option>
                <option value="600000">600,000</option>
                <option value="700000">700,000</option>
                <option value="800000">800,000</option>
                <option value="900000">900,000</option>
                <option value="1000000">1,000,000</option>
                <option value="1500000">1,500,000</option>
                <option value="2000000">2,000,000</option>
                <option value="2500000">2,500,000</option>
                <option value="3000000">3,000,000</option>
                <option value="3500000">3,500,000</option>
                <option value="4000000">4,000,000</option>
                <option value="4500000">4,500,000</option>
                <option value="5000000">5,000,000</option>
                <option value="6000000">6,000,000</option>
                <option value="7000000">7,000,000</option>
                <option value="8000000">8,000,000</option>
                <option value="9000000">9,000,000</option>
                <option value="10000000">10,000,000</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Description :</label>
              <textarea
                className="form-control"
                id="long"
                rows="8"
                defaultValue={description}
                maxLength={750}
                required
                name="description"
                onChange={handleDescription}
              />
            </div>
            <div className="col-12">
              <label>Team Members :</label>
              <input
                className="form-control"
                type="text"
                placeholder="Team Member's Name"
                value={newMember}
                onChange={(e) => setNewMember(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleAdd}
              >
                Add
              </button>
              <ol>
                {members.map((member, index) => (
                  <li key={member.text}>
                    <button
                      className="btn btn-danger mx-2 my-1"
                      type="button"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    {index + 1}.) {member.text}
                  </li>
                ))}
              </ol>
            </div>

            <button
              type="submit"
              className="btn btn-dark my-5"
              onClick={handleFounderInfo}
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Founders;
