import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
const [callSpecials, setSpecial] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {callSpecials.map((special, index) => 
       <SpecialButton key={index} special={special} changeData={props.changeData}/>

       )}
    </div>
  );
};
export default Specials;
