import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissable fade show text-center`}
        style={{ marginBottom: "0" }}
        role="alert"
      >
        <strong>{props.alert.msg}</strong>
      </div>
    )
  );
}

export default Alert;
