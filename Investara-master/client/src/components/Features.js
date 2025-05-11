import React from "react";
import "../../src/index.css";
// importing images
import money from "./assets/money.png";
import risk from "./assets/risk.png";
import veil from "./assets/veil.png";
import perks from "./assets/perks.png";
import hold from "./assets/hold.png";
import binary from "./assets/binary.png";
// images imported
import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <div
      style={{
        paddingBottom: "4em",
        backgroundColor: "#98c1d9 " /* fallback for old browsers */,
        background:
          "linear-gradient(to top,#e0fbfc , #98c1d9)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <div className="container features">
        <div className=" text-center " style={{ paddingTop: "3rem" }}>
          <h1 className="text-dark">Investara</h1>
          <h2 className="text-primary"> is a new kind of stock market</h2>
          <h4 className="text-secondary">
            Unlike the NASDAQ, we’re meant for startups and small businesses.
            What’s the difference?
          </h4>
        </div>
        <div className="row my-5">
          <div className=" col-md-4">
            <FeatureItem
              imgUrl={risk}
              title="It's much riskier"
              desc="Never invest more than you can afford to lose. Startups are hard. Even the best founders fail."
            />
          </div>
          <div className="col-md-4">
            <FeatureItem
              imgUrl={binary}
              title="Win big or lose all"
              desc="Startups win big or go bankrupt. Consider investing in them more like socially-good lottery tickets."
            />
          </div>
          <div className="col-md-4">
            <FeatureItem
              imgUrl={hold}
              title="Hold for the long term"
              desc="When it works, it takes a long time to earn a return. Expect to hold for years."
            />
          </div>
        </div>
        <div className="row md-4">
          <div className="col-md-4">
            <FeatureItem
              imgUrl={money}
              title="Build the future"
              desc="Your money goes to the company to help create jobs, build products, and grow companies."
            />
          </div>
          <div className="col-md-4">
            <FeatureItem
              imgUrl={perks}
              title="There are often perks"
              desc="Investors often get perks like VIP access to new products or discounts."
            />
          </div>
          <div className="col-md-4">
            <FeatureItem
              imgUrl={veil}
              title="You can help"
              desc="You can offer more than money. The best angel investors help the companies they invest in to succeed."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
