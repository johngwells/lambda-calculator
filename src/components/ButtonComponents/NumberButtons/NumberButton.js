import React from "react";

const NumberButton = props => {
  console.log(props)
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='button color2'>{props.numbers}
      </button>
    </div>
  );
};

export default NumberButton;
