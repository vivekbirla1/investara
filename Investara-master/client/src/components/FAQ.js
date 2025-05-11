import React from "react";

function FAQ(props) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          {props.ques}
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapsed "
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">{props.ans}</div>
      </div>
    </div>
  );
}

export default FAQ;
