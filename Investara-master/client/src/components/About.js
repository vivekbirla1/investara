import React from "react";

function About() {
  return (
    <div>
      <div>
        <h1 className="my-3">About Us</h1>
      </div>
      <div>
        <ul>
          <li>
            This website is made by a group of students for Project exhibition 2
            .
          </li>
          <li> We are the students of Vit Bhopal university .</li>
          <li>
            We made this project 
          </li>
          <li>
            This is a MERN full stack website made to connect the Startups and
            Businesses to the Investors .
          </li>
          <li>
            MERN full stack includes
            <ul>
              <li>
                M for MongoDB : MongoDB is acting like a middleware providing
                database to store information.
              </li>
              <li>
                E for ExpressJs : ExpressJs is used for backend along with
                NodeJs . It help in easing many functionality required by us.
              </li>
              <li>
                R for ReactJs : ReactJs is a frontend framework of Javascript
                also helping in some backend functions .
              </li>
              <li>
                N for NodeJs : NodeJs is a backend framework of Javascript
                helping us connecting the react frontend to the databases and
                managing the server .
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Team Members :</h3>
        <ul>
          <li>Vivek birla 21BCE10473</li>
          <li>Krishna yadav 22BCE11529</li>
          <li>Aman kumar jha 22BCE11538</li>
          <li>Anirudh pal 22BCE11494</li>
          <li>Naga pallav 22BCE11524</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
