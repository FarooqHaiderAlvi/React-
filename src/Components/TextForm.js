import React ,{useState} from 'react'
import PropTypes from 'prop-types';
export default function TextForm(props) {
    const [text,setText]=useState("Enter your text");
     const [count,setCount]=useState(0);

     const reset=()=>{
        let temp='';
        console.log('reset handled');
        setText(temp);
     }

    function handleUpperCase(){
        console.log("click handle is clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLowerCase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const letterCaseChange=(event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
           
                <h1>{props.title}</h1>
                <div className="form-group">
                  
                    <textarea className="form-control" value={text} onChange={letterCaseChange} id="myBox" rows="3"></textarea>
                </div>
           <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to UpperCase</button>
           <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to lowerCase</button>
           <button className="btn btn-primary mx-2" onClick={reset}>Reset</button>
          
           
        </div>
        <div className="container">
            <h3>letter count ={'>'} {text.length}</h3>
            <h3>word count ={'>'} {text.split(" ").length}</h3>
          
        </div>

        </>
    )
}

TextForm.propTypes = {
    title: PropTypes.string,
   
  };