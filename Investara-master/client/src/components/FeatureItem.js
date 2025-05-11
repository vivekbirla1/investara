import React, { Component } from "react";
import "./featureitem.css";
export class FeatureItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    let { imgUrl, desc, title } = this.props;
    return (
      <div className="my-3">
        <div className="mx-auto card h-100 w-75 border-primary ">
          <img
            src={imgUrl}
            className="card-img-top my-5 "
            alt="..."
            style={{
              margin: "auto",
              width: "100px",
            }}
          />

          <div className="card-body text-center ">
            <h5 className="card-title "> {title}</h5>
            <p
              className="card-text"
              style={{ fontSize: "1rem", color: "#3881ff" }}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureItem;
