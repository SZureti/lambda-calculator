import React from "react";

const OperatorButton = (props) => {
  let obj = props.operator.value;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {props.changeData(obj)}}>{props.operator.obj}</button>
    </>
  );
};
export default OperatorButton;