import React from "react";

export default function About(props) {
  return (
    <div className="accordion" id="accordionExample">
      <div
        className="accordion-item"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#212529fa",
          color: props.mode === "light" ? "#212529fa" : "white",
        }}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529fa",
              color: props.mode === "light" ? "#212529fa" : "white",
            }}
          >
            Analyze Your Text
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>TextUtils </strong>gives you a way to analyze your text quickly and efficiently. Be it WordCount, CharacterCount etc.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={{ backgroundColor: props.mode === "light" ? "white" : "#212529fa", color: props.mode === "light" ? "#212529fa" : "white" }}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={{ backgroundColor: props.mode === "light" ? "white" : "#212529fa", color: props.mode === "light" ? "#212529fa" : "white" }}
          >
            Free To Use
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>TextUtils</strong> is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. This is suitable for writing text with word / character limit.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={{ backgroundColor: props.mode === "light" ? "white" : "#212529fa", color: props.mode === "light" ? "#212529fa" : "white" }}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={{ backgroundColor: props.mode === "light" ? "white" : "#212529fa", color: props.mode === "light" ? "#212529fa" : "white" }}
          >
            Browser Compatible
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, Edge. It suits to count characters in facebook, books, blogs, excel document, pdf document, essays etc.
          </div>
        </div>
      </div>
    </div>
  );
}
