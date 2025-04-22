import React,{useState} from 'react'


export default function Textform(props) {
    const handleUPClick=()=>{
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","Success")
       
    }
    const handleloClick=()=>{
        // console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","Success")
    }
   
    const handleonChange=(e)=>{
        // console.log("on change")
        setText(e.target.value)
    }
    const handleClearClick=(e)=>{
        // console.log("on change")
        setText('')
        props.showAlert("Text cleared","Success")
    }
   
    const [text,setText]=useState("");
    // text = "New Text" // Wrong way to change the state
    // setText("New Text") //Correct way to change state
  return (
    <>
    <div className="container"  style={{color: props.textColor}}>
    <h1 >{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.textArea ,color: props.textColor}} value={text} onChange={handleonChange} id="Mybox" rows="8"></textarea>
  </div>
  <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleUPClick}>Convert to UpperCase</button>
  <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleloClick}>Convert to LowerCase</button>
  <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>

  </div>
  <div className="container my-3"  style={{color: props.textColor}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length-1} words and {text.length-0} characters</p>
    <p>{ 0.08*text.split(" ").length} Minutes read</p>
    
    <h2>Preview </h2>
    <p>{text.length>0?text:"Enter something into above box preview it here"}</p>
  </div>
  </>
  )
}