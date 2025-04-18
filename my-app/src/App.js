
import React , { useState } from 'react';
import './App.css';
// import About from './Components/About1';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  const [mode ,setMode]=useState("light"); // 

  const toggleMode =()=>{
    if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#88307f"
  }else{
    setMode("light")
    document.body.style.backgroundColor="white"
  }
  }
  return (
    <>
<Navbar title="TextUtils" AboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<div className="container my-3">
<Textform heading="Enter the text to analyze below" mode={mode}/>
{/* <About></About> */}
</div>
</>
  );
}

export default App;
