import React  from 'react'

export default function About(props) {
  return (
    <div
      className="container mt-8"
      style={{
        backgroundColor: props.mode === "dark" ? "black" : "#dadadf",
        color: props.mode === "light" ? "black" : "dimgrey",
      }}
    >
  
      <h1 className="my-4">About us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "light" ? "black" : "Black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <b>
                {" "}
                An Easy Way To Change Uppercase to Lowercase And Title
                Capitalization
              </b>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Have you ever typed out a document, made a few capitalization
              mistakes and wished you won't have to waste much time editing? It
              happens a lot, and if you are using a typical word processing
              tool, you will have your mistakes autocorrected as you type, but
              those kinds of software only correct grammatical errors. If you
              have to capitalize on a whole portion, you will need to do it
              manually. And that takes time. However, with an online text
              transforming tool like ours, you can easily transform the case of
              your texts. All you have to do is copy and paste your text, then
              select the case you want to transform it to. The Change Uppercase
              to Lowercase Tool is one of several SEO tools available on our
              site SmallSEOTools.com. It is an online text Converter that can
              receive both upper cases and lower case letters as input and do a
              text transform on them into desired cases.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "light" ? "black" : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <b>Case Converter Tool </b>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The lower case text tool takes every upper case letter inputted
              into the text area and converts all to lower case letters. Lower
              case letters are generally used for every letter in every word
              except for the first letter in words that begin sentences and
              proper nouns. Note that there are exceptions to this rule,
              specifically in words in which there is unusual capitalization;
              for example, eBay, JetBlue, iMac; etcetera. <br></br>{" "}
              <b>How to convert to lowercase:</b> <br></br> (i) Copy the text
              you want to convert from the word processor you are using.{" "}
              <br></br> (ii) Paste the text you copied into the text area
              provided on the screen:<br></br> (iii) Click on the “lower case”
              button. You should have your output in a few seconds:
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "light" ? "black" : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <b>Text Converter: Capital Letters And Small Letters</b>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The UpperCase Word text tool will take every first lower case
              letters of every word in the sentence inputted and change all to
              upper case letters. <br></br> UpperCase words or “Title Cases” as
              they are known are widely used for titles in texts where every
              word in the sentence; except for articles, conjunctions and
              prepositions; begins with a capital letter. <br></br> It's common
              to see title cases used for titles of books, plays, and movies,
              but seldom for articles. This variation is mostly a question of
              style. When writing, decide the headline style you want to use.
              This is of course if you are not writing under strict guidelines
              where you are given a headline style. <br></br> Capitalize word
              tool in action : <br></br> (i) Copy the text you want to convert
              from the word processor you are using. <br></br> (ii) Paste the
              text you copied into the text area provided on the screen:{" "}
              <br></br> (iii) Click on the “Convert to UpperCase” button. You
              should have your output in a few seconds:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
