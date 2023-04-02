import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter your text");
    function handleClick(){
        console.log("click handle is clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const textChange=(event)=>{
        setText(event.target.value);
    }
    return (
        <div>
           
                <h1>{props.title}</h1>
                <div className="form-group">
                    <label htmlFor="myBox">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={textChange} id="myBox" rows="3"></textarea>
                </div>
           <button className="btn btn-primary" onClick={handleClick}>Convert to UpperCase</button>
        </div>
    )
}
