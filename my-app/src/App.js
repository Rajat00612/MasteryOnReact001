
import React , { useState } from 'react';
import './App.css';
// import About from './Components/About1';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';




function App() {
  const [mode ,setMode]=useState("light"); // 
const[alert , setAlert]=useState(null);

const light = { name: "light", color: "light" ,msg: "Light mode has been enabled" ,type: "Success"};
const dark = { name: "dark", color: "dark" , msg: "Dark mode has been enabled" , type: "Success"};
const active = { name: "#ffc107", color: "red", msg: "Active mode has been enabled" , type:"Success",style:"h"};
const passive = { name: "blue", color: "blue" , msg: "Passive mode has been enabled" ,type:"Success",style:"#e3f2fd"};


const [bgColor, setBgColor] = useState("#e3f2fd");
const SelectDark = () => {
  setMode(`${dark.name}`);
  showAlert(`${dark.type}  ${dark.msg}`);
   document.body.style.backgroundColor="#88307f"

}
  const SelectLight = () => {
  setMode(`${light.name}`);
  showAlert(`${light.type}  ${light.msg} `);
   document.body.style.backgroundColor="white"
}
  const SelectActive = () => {
  setMode(`${active.name}`);
  setBgColor(active.name);
  showAlert(`${active.type}  ${active.msg} `);
   document.body.style.backgroundColor="#20c997"
}
  const SelectPassive = () => {
  setMode(`${passive.name}`);
  showAlert(` ${passive.type}  ${passive.msg}`);
   document.body.style.backgroundColor="#0dcaf0"
}
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
  // const toggleMode =()=>{
  //   if(mode==="light"){
  //   setMode("dark")
  //   document.body.style.backgroundColor="#88307f"
  //   // showAlert("Dark mode has been enabled","success")
  // }else{
  //   setMode("light")
  //   document.body.style.backgroundColor="white"
  //   // showAlert("Light mode has been enabled","success")
  // }
  // }
  return (
    <>
<Navbar title="TextUtils" AboutText="About Textutils" SelectActive={SelectActive} SelectDark={SelectDark} SelectLight={SelectLight} SelectPassive={SelectPassive} mode={mode} />
<Alert alert={alert}></Alert>
{/* <Navbar/> */}
<div className="container my-3">
<Textform heading="Enter the text to analyze below"showAlert={showAlert} mode={mode}/>
{/* <About></About> */}


</div>
</>
  );
}

export default App;
