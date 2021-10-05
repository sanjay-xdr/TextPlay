import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, settext] = useState("Enter your text ")

function changeHandler(event){
    settext(event.target.value);


}    


const clickHandlerUp=()=>{
    var newtext=text.toUpperCase();
    settext(newtext);
    props.showalert("Changed to Upper case","Success")
}
const clickHandlerLow=()=>{
    var newtext=text.toLowerCase();
    settext(newtext);
    props.showalert("Changed to Lower case","Success")
}

const clickHandlerClear=()=>{
    var newtext="";
    settext(newtext);
    props.showalert("Clearing the input field","Success")
}

const clickHandlerCopy=()=>{
    var newtext=document.getElementById("textarea")
    newtext.select();
    navigator.clipboard.writeText(newtext.value)
    props.showalert("Copy to clipboard","Success")
}
    return (
    <>
    <div className="container my-3" style={{color:props.mode==="dark"?'white':'black'}}  >
<div className="mb-3">
 <h2 style={{color:props.mode==="dark"?'white':'black'}} >{props.placeholder}</h2>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="11" id="textarea" style={{backgroundColor:props.mode==="dark"?'#111827':'#F3F4F6',color:props.mode==="dark"?'white':'black'}}  value={text} onChange={changeHandler}></textarea>
</div>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={clickHandlerClear} >Clear</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={clickHandlerUp} >Change to Upper Case</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={clickHandlerLow} >Change to Lower Case</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={clickHandlerCopy} >Copy to Clipboard</button>



</div>

<div className="container my-3" style={{color:props.mode==="dark"?'white':'black'}}>
    <h3>You Text Summery</h3>
    <p>{text.split(/\s+/).filter((t)=>t!=="").length} word and  {text.length} characters</p>
    <p>{parseFloat(0.008*text.split(" ").length).toFixed(2) } Minutes read</p>
    
</div>





    </>
    )
}
