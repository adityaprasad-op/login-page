import React,{useState} from "react";

function Form(props) {
  const [isMousedOver,setMouseOver]=useState(false);
  const [name,setName]=useState("");
  const [headingText,setHeading]=useState("");

  function handleChange(event){
    setName(event.target.value);
  }
  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  function handleClick(event){
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div>
    <h1>Hello {headingText}</h1>
    <form className="form" onSubmit={handleChange}>
      <input 
      type="text" 
      placeholder="Username" 
      onChange={handleChange}
      value={name}
      />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
      <button 
      type="submit"
      style={{backgroundColor: isMousedOver?"black":"white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      >{props.isRegistered?"Login":"Register"}
      </button>
    </form>
    </div>
    
  );
}

export default Form;
