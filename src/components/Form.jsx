import React,{useState} from "react";

function Form(props) {
  const [isMousedOver,setMouseOver]=useState(false);
  //const [name,setName]=useState("");
  //const [headingText,setHeading]=useState("");

  const [contact,setContact]=useState({ //useState with different objects
    fName:"",                           //(used to handle multiple useStates)
    lName:"",
    email:""
  });

  function handleChange(event){
    const {name,value}= event.target;
    
    setContact((prevValue)=>{
      if(name==="fName"){
        return{
          fName:value,
          lName:prevValue.lName,
          email:prevValue.email
        }    
      }else if(name==="lName"){
      return{
        fName:prevValue.fName,
        lName:value,
        email:prevValue.email
      }     
      }else if(name==="email"){
        return{
          fName:prevValue.fName,
          lName:prevValue.lName,
          email:value
        }                  
      }
    })
  }
  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  // function handleClick(event){
  //   setHeading(name);
  //   event.preventDefault();
  // }
  return (
    <div>
    <h1>Hello {contact.fName} {contact.lName}</h1>
    <p>{contact.email}</p>
    <form className="form" onSubmit={handleChange}>
      <input 
      name="fName" 
      placeholder="FirstName" 
      onChange={handleChange}
      //value={name}
      />
      <input 
      name="lName"  
      placeholder="Lastname"
      onChange={handleChange}
      />
      <input 
      name="email" 
      placeholder="Email" 
      onChange={handleChange}
      />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
      <button 
      type="submit"
      style={{backgroundColor: isMousedOver?"black":"white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      //onClick={handleClick}
      >{props.isRegistered?"Login":"Register"}
      </button>
    </form>
    </div>
    
  );
}

export default Form;
