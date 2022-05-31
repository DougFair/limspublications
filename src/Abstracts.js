import React from "react";
import "./Abstracts.css";
import LinkButton from "./LinkButton";

const Abstracts = (props) => {
  let abstractDisplay = "";
  const abstracts = props.abstracts[0].abstract;

  if (props.abstracts.length) {
    const breakIndices = [0];
    let element = "\n\n\n";
    let idx = abstracts.indexOf(element);
    console.log("idx " + idx);
    while (idx !== -1) {
      breakIndices.push(idx);
      idx = abstracts.indexOf(element, idx + 1);
    }
    console.log(breakIndices);

    const substrings = [];
    breakIndices.forEach((index, i) => {
      const item = abstracts.slice(index, breakIndices[i + 1] + 2);
      substrings.push(item);
    });
    console.log(substrings);

    abstractDisplay = substrings.map((paper, idx) => {
      return (
        <div className="abstractItems" key={idx}>
          <p>{paper}</p>
          <hr />
        </div>
      );
    });
  } else if (!props.idlist.length) {
    abstractDisplay = <p>No abstracts to display</p>;
  }
  return (
    <div className="abstractsContainer">
      <h1>Abstracts</h1>
      <LinkButton to="/">HOME</LinkButton>

      {abstractDisplay}
    </div>
  );
};

export default Abstracts;
