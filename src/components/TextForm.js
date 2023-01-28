import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {

        let newText = "";
        setText(newText);
    }

    // const handleCapitalizeClick = (word) => {
    //     const lower = word.toLowerCase();
    //     let newText = lower.charAt(0).toUpperCase() + lower.slice(1);
    //     setText(newText);
    // }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    // text = "new text";  wrong way to change the state
    // setText("new text"); correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalize Case</button> */}
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>handle Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something in the textbox"}</p>
        </div>
        </>
    )
}
