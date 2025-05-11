import React from "react";

function Sophisticated_investor() {
  return (
    <div
      style={{
        margin: "4em",
        borderLeft: "2px solid grey",
        paddingLeft: "2em",
      }}
    >
      <hr />
      <h2 className="text-center">Sophisticated Investor Test</h2>{" "}
      <p>
        To qualify as a wholesale investor under the sophisticated investor
        test, your accountant needs to certify that you:
      </p>
      <ul className="list-group">
        <li class="list-group-item list-group-item-primary">
          Have net assets of at least $2.5million, or
        </li>
        <li class="list-group-item list-group-item-primary">
          Have a gross income for each of the last two financial years of at
          least $250,000
        </li>
      </ul>
      <hr />
      <h2 className="text-center">Professional Investor Test</h2>{" "}
      <p>
        "Professional Investor" means a person in relation to whom one or more
        of the following paragraphs apply:
      </p>
      <ul className="list-group">
        <li class="list-group-item list-group-item-warning">
          who holds an Australian Financial Services License{" "}
        </li>
        <li class="list-group-item list-group-item-warning">
          who has or controls at least $10 million (and may include funds held
          by an associate or under a trust that the person manages){" "}
        </li>
        <li class="list-group-item list-group-item-warning">
          {" "}
          that is a body regulated by APRA other than a trustee of:
          <ol type="i" className="list-group">
            <li class="list-group-item list-group-item-secondary">
              a superannuation fund;{" "}
            </li>
            <li class="list-group-item list-group-item-secondary">
              {" "}
              an approved deposit fund;
            </li>
            <li class="list-group-item list-group-item-secondary">
              {" "}
              a pooled superannuation trust; or{" "}
            </li>
            <li class="list-group-item list-group-item-secondary">
              a public sector superannuation scheme.
            </li>
          </ol>
        </li>
      </ul>
      <hr />
      <p>
        within the meaning of the Superannuation Industry (Supervision) Act 1993
      </p>
      <ul className="list-group">
        <li class="list-group-item list-group-item-info">
          that is a body registered under the Financial Corporations Act 1974.
        </li>
        <li class="list-group-item list-group-item-info">
          that is a trustee of:{" "}
          <ol type="i" className="list-group">
            <li class="list-group-item list-group-item-secondary">
              a superannuation fund; or
            </li>
            <li class="list-group-item list-group-item-secondary">
              an approved deposit fund; or
            </li>
            <li class="list-group-item list-group-item-secondary">
              {" "}
              a pooled superannuation trust; or
            </li>
            <li class="list-group-item list-group-item-secondary">
              {" "}
              a public sector superannuation scheme within the meaning of the
              Superannuation Industry (Supervision) Act 1993 and the fund, trust
              or scheme has net assets of at least $10 million.{" "}
            </li>
          </ol>
        </li>
        <li class="list-group-item list-group-item-info">
          that is a listed entity or a related body corporate of a listed entity
        </li>
        <li class="list-group-item list-group-item-info">
          that is an exempt public authority
        </li>
        <li class="list-group-item list-group-item-info">
          that is a body corporate, or an unincorporated body, that:
          <ol className="list-group">
            <li class="list-group-item list-group-item-secondary">
              carries on a business of investment in financial products,
              interests in land or other investments; and
            </li>
            <li class="list-group-item list-group-item-secondary">
              for those purposes, invests funds received (directly or
              indirectly) following an offer or invitation to the public,within
              the meaning of section 82 of the Corporations Act 2001, the terms
              of which provided for the funds subscribed to be invested for
              those purposes.
            </li>
          </ol>
        </li>
        <li class="list-group-item list-group-item-info">
          that is a foreign entity which, if established or incorporated in
          India, would be covered by one of the preceding paragraphs.
        </li>
      </ul>
    </div>
  );
}

export default Sophisticated_investor;
