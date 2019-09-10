import React from "react";

const OperatorButton = (props) => {
  // console.log(props)
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='button'>{props.operators.char}</button>
    </div>
  );
};

export default OperatorButton;
