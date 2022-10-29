import React, { useState } from "react";

import './pass-ui.css';

/*
* This function the input of the secret key and password with added copy text functionality 
* Note that the action encryption code is in encryption
*/

const PassUI = (props) => {
    const {
        processType, // the value for which action type the user is in
        handleProcess, // function to fire encrypt or decrypt
        updateText, // function to update textarea (holds encryption data or clear text)
        text // this is the current value for the textarea
    } = props

    const handleSubmit = (event) => {
        event.preventDefault()
        console.info(`ProcessType INPUT SUBMIT: ${event.target.value}`);
        handleProcess(event.target[0].value);
        event.target[0].value = '';
    }

    const handleTextChange = (event) => {
        console.info(`text UPATE: ${event.target.value}`);
        updateText(event.target.value);
    }

    const handleCopy = (event) => {
        console.info(`execute handleCopy`);
        navigator.clipboard.writeText(text).then(
            (data) => {
              console.log('success', data);
            },
            (error) => {
              console.warn('PROCESS FAILED: COPY TEXT')
              console.warn(error)
            }
          );
    }

    return (

    <div className="pass-container">
      <div className="input-container">
        <form className="form" onSubmit={handleSubmit}>
            <input name="secretKey" placeholder={processType === 'decrypt'? 'Enter Your Encryption Key!': 'Choose A Secret!'} type="text" required />
            <button type="submit" >{processType === 'decrypt'? 'Decode': 'Secure'}</button>
        </form>
        <span className="copybtn" name="copy" onClick={handleCopy}>Copy Text!</span>
      </div>
        <div className="text-container">
            <textarea 
                type='textarea' 
                placeholder={props.processType === 'decrypt'? 'Enter your encrypted text and discover your secrets!😊': 'Enter in your secrets and watch them become locked!😊'}   
                onChange={handleTextChange} 
                value={props.text}>
            </textarea>
        </div>
    </div>
    );
}

export default PassUI;