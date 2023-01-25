import React,{useState} from "react";



function Form(props) {
  const [isMousedOver,setMouseOver]=useState(false);

  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
      <button 
      style={{backgroundColor: isMousedOver?"black":"white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >{props.isRegistered?"Login":"Register"}
      </button>
    </form>
  );
}

export default Form;
