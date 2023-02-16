import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!" ,"success")
    }
    const handleLoClick = ()=>{
        let newTextt = text.toLowerCase();
        setText(newTextt)
        props.showAlert("Converted to LowerCase!" ,"success")
    }
    const handleClearClick= ()=>{
        let newTextt = ' ';
        setText(newTextt)
        props.showAlert("Clear Text!" ,"success")
    }
  
    const handleCopy = () => {
          var text = document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showAlert("Copy Text!" ,"success")
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "))
      props.showAlert("Remove Extra Spaces!" ,"success")
    }
    const handleOnChange= (event)=>{
      setText(event.target.value)
  }

    const [text, setText] = useState(' ');
  return (
    <>
    <div className='container'  style={{color :props.mode==='dark'?'white':'black'}} >
    <h3>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'black'}} id="myBox" rows="12"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert To UpperCase</button>
  <button className="btn btn-primary mx-2 my-2"  onClick={handleLoClick} >Convert To LowerCase</button>
  <button className="btn btn-primary mx-2 my-2"  onClick={handleClearClick} >Clear Text</button>
  <button className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpaces} >Remove Extra Spaces</button>
  <button className="btn btn-primary"  onClick={handleCopy} >Copy Text</button>
</div>
<div className="container" my-3  style={{color :props.mode==='dark'?'white':'black'}} >
  <h2>Your text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something  in the textbox above to preview it here"}</p>
</div>

    </>
  )
}
