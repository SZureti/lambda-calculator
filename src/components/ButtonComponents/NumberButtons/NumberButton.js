import React from "react";

const NumberButton = (props) => {
  console.log("NUMBER BUTTON: ", props.changeData);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.number}</button>
    </>
  );
};
export default NumberButton;