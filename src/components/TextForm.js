import React, {useState} from "react";



 export default function TextForms(props) {
    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase ","info")
    }

    const handleLowClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","warning")
    };

     const handleClearClick = () => {
      let newText = ' ';
      setText(newText);
      props.showAlert("Text is cleared","danger")
    };
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text  =document.getElementById("myBox");
        text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard", "success");
    };

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed ","info");
    };
    const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "dimgrey" }}
        >
          <h2 className="mb-4">{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control "
              value={text}
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              onChange={handleOnChange}
              id="myBox"
              rows="10"
            ></textarea>
          </div>
          <div
            className="container d-flex  flex-wrap justify-content-start align  "
            style={{ color: props.mode === "light" ? "black" : "dimgrey" }}
          >
            <button
              disabled={text.length === 0}
              className="btn btn-dark my-2"
              style={{ color: props.mode === "light" ? "white" : "dimgrey" }}
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-dark mx-4 my-2 "
              style={{ color: props.mode === "light" ? "White" : "dimgrey" }}
              onClick={handleLowClick}
            >
              Convert to LowerCase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-dark mx-4 my-2"
              style={{ color: props.mode === "light" ? "White" : "dimgrey" }}
              onClick={handleClearClick}
            >
              Clear the text
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-dark mx-4 my-2"
              style={{ color: props.mode === "light" ? "White" : "dimgrey" }}
              onClick={handleCopy}
            >
              Copy the text
            </button>

            <button
              disabled={text.length === 0}
              className="btn btn-dark mx-4 my-2"
              style={{ color: props.mode === "light" ? "White" : "dimgrey" }}
              onClick={handleExtraSpaces}
            >
              Remove extra spaces
            </button>
          </div>
        </div>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "light" ? "black" : "rgb(188 194 194)",
          backgroundColor: props.mode === "light" ? "rgb(188 194 194)" : "black",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          Reading Time:{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in the TextBox to preview here"}
        </p>
      </div>
    </>
  );
   }