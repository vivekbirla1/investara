import React, { useState } from "react";
import pitch from "./assets/pitch.png";

function Pitch() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  return (
    <div
      className="text-dark"
      style={{
        backgroundColor: "lightgrey",
      }}
    >
      <div>
        <h2
          className="text-center header_founder "
          style={{
            padding: "2rem",
          }}
        >
          Pitch Details{" "}
        </h2>{" "}
        <div
          className="founders d-flex"
          style={{
            overflow: "hidden",
            // display: "flex",
          }}
        >
          <div
            className="founders_img "
            style={{
              background: `url("${pitch}")`,
              margin: "auto",
              width: "50vw",
              height: "100% !important",
            }}
          ></div>
          <form
            className="row g-3  founders_form "
            style={{
              padding: "1rem",
              width: "50vw",
              margin: 0,
            }}
          >
            <div className="col-12">
              <label for="inputshortsummary" className="form-label">
                Short Summary:
              </label>

              <p
                className="text-primary"
                style={{
                  fontSize: "0.8rem",
                }}
              >
                How would you sell your product in a couple of sentences ? Grab
                investors attention and make yourself stand out with a snappy
                introduction.Remember It 'll be the first thing the investors
                will read about you on our site.{" "}
              </p>

              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleOnChange}
                required
              />
            </div>{" "}
            <div className="col-12 ">
              <label for="inputshortsummary" className="form-label">
                The Business :
              </label>
              <p
                className="text-primary"
                style={{
                  fontSize: "0.8rem",
                }}
              >
                This section is for you to explain your business.Here are some
                questions to consider answering: What does your business do ?
                What product or service do you provide ? Does it solve a problem
                ? How does it work ? How is it beneficial for the users /
                customers ?
              </p>
              <textarea
                className="form-control"
                id="long"
                rows="8"
                value={text}
                maxLength={750}
                required
                onChange={handleOnChange}
              />{" "}
            </div>{" "}
            <div className="col-12">
              <label for="inputshortsummary" className="form-label">
                The Market :
              </label>
              <p
                className="text-primary "
                style={{
                  fontSize: "0.8rem",
                }}
              >
                Next up, talk about the state of the market your business is in
                .Again see how many of these you can answer, but don’ t worry if
                they’ re not all relevant to you… <br />
                How big is the market and the opportunity ? Is the market
                growing ? What are the trends ? Who are your target customers ?
                Who are your competitors(direct and indirect) ? Do you have any
                unique selling points(USP) or competitive advantages ?
              </p>
              <textarea
                className="form-control"
                id="long"
                rows="8"
                value={text}
                maxLength={750}
                required
                onChange={handleOnChange}
              />{" "}
            </div>
            <div className="col-12 h-100">
              <label for="inputshortsummary" className="form-label">
                Progress / Proof :
              </label>
              <p
                className="text-primary"
                style={{
                  fontSize: "0.8rem",
                }}
              >
                Okay so we know about the business and the market.We now need to
                know about your progress– how’ s it actually going so far ?
                <br />
                Again, here are some possible things to consider… <br /> Do you
                have a prototype, finished product or website ? Have you
                received any positive feedback from users or industry experts ?
                What research have you done ? Do you have any pre - orders or
                potential clients lined up ? Do you already have any confirmed
                clients or users ? Do you have any social media followers ? Have
                you been featured in the press ? Have you won any awards ? Do
                you have patents ? Are you generating any revenues yet ? Are you
                profitable ? Show the investors how great your company is
                already!
              </p>
              <textarea
                className="form-control"
                id="long"
                rows="8"
                value={text}
                maxLength={750}
                required
                onChange={handleOnChange}
              />{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Pitch;
