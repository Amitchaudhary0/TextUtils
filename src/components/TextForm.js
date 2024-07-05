import React, { useState } from "react";

export default function TextForm(props) {
  // handel change to uppper case on clicked
  const handelUppercase = () => {
    // console.log("Uppercase button is clicked")

    setText(text.toUpperCase());
    if (text !== text.toUpperCase()) {
      props.showAlert("Converted To Uppercase!", "success");
    } else {
      props.showAlert("Enter Your Text To Convert It In Uppercase", "warning");
    }
  };

  // handel change to lower case on clicked
  const handelLowercase = () => {
    // console.log("Lowercase button is clicked")
    setText(text.toLowerCase());
    if (text !== text.toLowerCase()) {
      props.showAlert("Converted To Lowercase!", "success");
    } else {
      props.showAlert("Enter Your Text To Convert It In Lowercase", "warning");
    }
  };

  // handel on change
  const handelOnChange = (event) => {
    // console.log("Handel on changed")
    setText(event.target.value);
  };

  const handelCopyText = () => {
    navigator.clipboard.writeText(text);
    if (text) {
      props.showAlert("Copied To Clipbord!", "success");
    } else {
      props.showAlert("There Is Nothing To Copy", "primary");
    }
  };

  const handelClearText = () => {
    setText(text.replace(text, ""));
    if (text !== text.replace(text, "")) {
      props.showAlert("Text Cleared!", "success");
    } else {
      props.showAlert("Enter Text To Clear ", "primary");
    }
  };

  const handelExtraSpaces = () => {
    setText(text.replace(/\s+/g, " "));
    if (text !== text.replace(/\s+/g, " ")) {
      props.showAlert("Removed Extra Spaces!", "success");
    } else {
      props.showAlert("Your Text Don't Have Any Extra Spaces", "primary");
    }
  };

  const handelFind = (event) => {
    setFind(event.target.value);
  };

  const handelFindText = () => {
    setFind(text.match(findValue));
    console.log(findValue);
    if (text.match(findValue)) {
      props.showAlert("Word Found Successfuly!", "success");
    } else {
      props.showAlert("Word Did't Found", "warning");
    }
  };

  const handelReplaceValue = (event) => {
    setReplaceValue(event.target.value);
  };

  const handelReplace = () => {
    setText(text.replace(searchValue, replaceValue));
    // setText(text.replace(/\s+/g," "));
    console.log(find);
    if (text !== text.replace(searchValue, replaceValue)) {
      props.showAlert("Word Are Replaced Successfuly!", "success");
    } else {
      props.showAlert("Can't Replace the Word", "danger");
    }
  };

  const handelRemoveValue = (event) => {
    setRemoveValue(event.target.value);
  };

  const handelRemove = () => {
    setText(text.replace(removedValue, ""));

    console.log(removedValue);
    if (text !== text.replace(removedValue, "")) {
      props.showAlert("Words Removed Successfuly!", "success");
    } else {
      props.showAlert("Did't Find the Maching Words", "danger");
    }
  };

  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replaceValue, setReplaceValue] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  let searchValue = new RegExp("\\b" + find + "\\b", "gi");
  let removedValue = new RegExp("\\b" + removeValue, "gi");
  let findValue = new RegExp("\\b" + find + "\\b", "gi");

  // let replaceValue;

  return (
    <div
      className={`"container text-${
        props.mode === "light" ? "black" : "light"
      }`}
    >
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="exampleFormControlTextarea1"
          rows="10"
          style={{
            background: props.mode === "light" ? "white" : "#494949",
            color: props.mode === "light" ? "black" : "white",
            border: props.mode === "light" ? "" : "1px solid black",
          }}
        ></textarea>
      </div>

      <div>
        <input
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } me-1 my-1`}
          type="submit"
          value="Convert To Uppercase"
          onClick={handelUppercase}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        ></input>

        <input
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          type="button"
          value="Convert To Lowercase"
          onClick={handelLowercase}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        ></input>

        <input
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          type="button"
          value="Copy Text"
          onClick={handelCopyText}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        ></input>

        <input
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          type="button"
          value="Clear Text"
          onClick={handelClearText}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        ></input>

        <input
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          type="button"
          value="Remove Extra Spaces"
          onClick={handelExtraSpaces}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        ></input>

        <input
          className="form-control-sm ms-2 me-1 my-2"
          type="search"
          placeholder="Remove Word"
          value={removeValue}
          onChange={handelRemoveValue}
          aria-label="Search"
          style={{
            background: props.mode === "light" ? "white" : "#494949",
            color: props.mode === "light" ? "black" : "white",
            border: props.mode === "light" ? "" : "1px solid black",
          }}
        ></input>

        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          }  my-2`}
          type="submit"
          onClick={handelRemove}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        >
          Remove
        </button>
      </div>
      <div>
        {/* <form className="d-flex my-2" role="search"> */}
        <input
          className="form-control-lg me-4 my-2 "
          type="search"
          placeholder="Find"
          value={find}
          onChange={handelFind}
          aria-label="Search"
          style={{
            background: props.mode === "light" ? "white" : "#494949",
            color: props.mode === "light" ? "black" : "white",
            border: props.mode === "light" ? "" : "1px solid black",
          }}
        ></input>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } me-5 my-2`}
          type="submit"
          onClick={handelFindText}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        >
          Find
        </button>
        <input
          className="form-control-lg me-4 my-2"
          type="search"
          placeholder="Replace"
          value={replaceValue}
          onChange={handelReplaceValue}
          aria-label="Search"
          style={{
            background: props.mode === "light" ? "white" : "#494949",
            color: props.mode === "light" ? "black" : "white",
            border: props.mode === "light" ? "" : "1px solid black",
          }}
        ></input>

        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } me-5 my-2`}
          type="submit"
          onClick={handelReplace}
          style={{border:props.mode==="light"?"":"1px solid black"}}
        >
          Replace
        </button>
        {/* </form> */}
      </div>

      <div className=" my-2 mx-2 text-center text-uppercase">
        <h2>Text Summary</h2>

        <p className="text-capitalize">
          This text contain{" "}
          {
            text.split(/\s+/).filter((kuchbhi) => {
              return kuchbhi.length !== 0;
            }).length
          }{" "}
          words and {text.length} charcters.
        </p>
        <p className="text-capitalize">
          You can read it in{" "}
          {text.split(/\s+/).filter((kuchbhi) => {
            return kuchbhi.length !== 0;
          }).length * 0.0076}{" "}
          minutes.
        </p>
      </div>

      <div className={` border border-${props.mode==="light"?"primary":"dark"} border-3 rounded  my-5 px-5 py-3`}>
        <h2>
          PREVIEW
          <hr />
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

// NOTE
// This how we can use default props

TextForm.defaultProps = {
  heading: "Enter Your Text",
};
