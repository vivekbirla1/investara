import React from "react";
import "./profile.css";
function DetailsPage() {
  const user = localStorage.getItem("user");
  const auth = localStorage.getItem("Startup");

  const parsedData = JSON.parse(auth);
  return (
    <div
      className="profile_sec"
      style={{
        padding: "3rem",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000)",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center display-1"> {JSON.parse(user).name}</h1>
      <h4 className="text-center display-6">
        {JSON.parse(user).usertype.toUpperCase()}
      </h4>
      <div class="col-lg-8" style={{ margin: "auto" }}>
        <div class="card mb-4 ">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Pitch Title </p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{parsedData.pitchtitle}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Website </p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">
                  {" "}
                  <a href={parsedData.website} target="_blank" rel="noreferrer">
                    {parsedData.website === ""
                      ? "Website url is not provided "
                      : parsedData.website}
                  </a>
                </p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">+91 {parsedData.phone}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Location</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{parsedData.location}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Industry1</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{parsedData.industry1}</p>
              </div>
            </div>
            <hr />
            {parsedData.industry2 === "default" ? null : (
              <>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Industry 2</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{parsedData.industry2}</p>
                  </div>
                </div>
              </>
            )}
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Stage</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{parsedData.stage}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Investor Role</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{parsedData.investorRole}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Raising</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">&#8377; {parsedData.raising}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Raised</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">&#8377; {parsedData.raised}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Description</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{parsedData.description}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Team Members</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">
                  {" "}
                  {parsedData.members && parsedData.members.length > 0 ? (
                    parsedData.members.map((member, index) => (
                      <li type="i" key={index}>
                        {member}
                      </li>
                    ))
                  ) : (
                    <p>No members found</p>
                  )}
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
