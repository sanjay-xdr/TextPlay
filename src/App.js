import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import React, { useState } from 'react';


function App() {

  const [mode, setmode] = useState('light')
  const togglemode=()=>{
    if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor="#111827"
    showalert("Dark Mode enabled","Success")
  }
    else{
      setmode('light')
      document.body.style.backgroundColor="#F3F4F6"
      showalert("Light Mode enabled","Success")

      
    }

  }
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
      
    })
    setTimeout(()=>setalert(null),1200)
  }
   

  
  return (
    <>
    <Navbar title="Text Play" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <TextForm showalert={showalert} placeholder="Enter your Text Here" mode={mode}></TextForm>
    
    </>
  );
}

export default App;
