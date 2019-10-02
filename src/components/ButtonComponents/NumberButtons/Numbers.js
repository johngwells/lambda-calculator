import React, { useState } from "react";
import NumberButton from './NumberButton';

import { numbers } from '../../../data';
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState] = useState(numbers);

  return (
    <div className='more-divs'>
      <div className='number_button'>
        {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
        {
          numbersState.map((numbers, index) => (
            <NumberButton key={index} numbers={numbers}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Numbers;
