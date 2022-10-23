import React, { useState } from "react";

import './pass-ui.css';

const PassUI = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        document.getElementById('checkbox').checked = false;
        setTimeout(() => {
            document.getElementById('checkbox').checked = true;
        }, 800);
        props.handleProcess(event.target[0].value);
        event.target[0].value = '';
    }

    const handleTextChange = (event) => {
        console.info(`text UPATE: ${event.target.value}`);
        props.updateText(event.target.value);
    }

    const handleCopy = (event) => {
        navigator.clipboard.writeText(props.text).then(
            (data) => {
              /* clipboard successfully set */
              console.log('success', data);
            },
            (error) => {
              /* clipboard write failed */
              console.log('error', error)
            }
          );
    }

    return (
    <>
    <div className="input-container" id='input-container'>
        <input className="c-checkbox" type="checkbox" id="checkbox" />
        <div className="c-formContainer" id="form">
        <form className="c-form" onSubmit={handleSubmit}>
            <input className="c-form__input" name="secretKey" placeholder={props.processType === 'decrypt'? 'Please Enter Encryption Key': 'Please Enter Your Secret Pass'} type="text" required />
            <label className="c-form__buttonLabel" htmlFor="checkbox">
            <button className="c-form__button" type="submit" >{props.processType === 'decrypt'? 'Decode': 'Secure'}</button>
            </label>
            <label className="c-form__toggle" id="toggle" htmlFor="checkbox" data-title="Open Me"></label>
        </form>
        </div>
    </div>
    <div className="text-container">
            <textarea 
                type='textarea' 
                placeholder={props.processType === 'decrypt'? 'Enter your encrypted text and discover your secrets!😊': 'Enter in your secrets and watch them become locked!😊'}   
                onChange={handleTextChange} 
                value={props.text}>
            </textarea>
    </div>
    <div className="text-container">
        <button name="copy" onClick={handleCopy}>Copy To clipboard!</button>
    </div>
    </>
    );
}

export default PassUI;