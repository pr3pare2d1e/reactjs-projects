import React from "react";

import './options.css';

/*
* This function handles the different Options/Modes for the app (encrypt/decrypt)
*/

const Options = (props) => {

  const handleSelect = (event) => {
    if(props.processType !== event.target.value){
      console.info(`ProcessType UPDATE: ${event.target.value}`);
      props.handleProcessChange(event.target.value);
    }
  }
    return (
        <div className='options'>
            <div className='btn-box'>
              <button value="encrypt" onClick={handleSelect}>
                Encrypt
              </button>
            </div>
            <div className='btn-box'>
              <button value="decrypt" onClick={handleSelect}>
                  Decrypt
              </button>
            </div>
        </div>
    );
}

export default Options;