import React, { useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
    const [step , setStep]=useState(1);
    const [open , setOpen]=useState(true);

function handleOpen(){
    setOpen(!open);
    
}
// handleOpen();

  function handlePrivious() {
    if(step>1)
    setStep(step-1);
  };

   function handleNext() {
    if(step<3)
   setStep(step+1);
  }
  
  const style = { backgroundColor: "#7950f2", color: "#fff" };
  return (
  <>
  <button onClick={handleOpen} className="close">{!open?"x" :"v"}</button>
  <p>{open&&"we are still working on this project kindly wait"}</p>
 
 {!open&&<div className="steps"> 
      <div className="numbers">
        {" "}
        <div className={step >= 1 ? "active":""}>1</div>
        <div className={step >= 2 ? "active":""}>2</div>
        <div className={step >= 3 ? "active":""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}{" "}
      </p>
      <div className="buttons">
        <button style={style} onClick={handlePrivious}>
          previous{" "}
        </button>
        <button style={style} onClick={handleNext}>next</button>
      </div>
    </div>}

    
  </>);
};

export default App;
