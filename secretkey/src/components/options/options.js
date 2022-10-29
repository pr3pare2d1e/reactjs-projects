import React from "react";

import './options.css';

/*
* This function handles the different Options/Modes for the app (encrypt/decrypt)
*/

const Options = (props) => {
  const {
    processType, // the value for which action type the user is in
    handleProcessChange // function to update option
  } = props;

  const handleSelect = (event) => {
    if(processType !== event.target.value){
      console.info(`ProcessType UPDATE: ${event.target.value}`);
      handleProcessChange(event.target.value);
    }
  }
    return (
        <div className='options'>
            <div className='btn-box'>
              <button value="encrypt" className={processType === 'encrypt' ? 'active': ''} onClick={handleSelect}>
                Encrypt
              </button>
            </div>
            <div className='btn-box'>
              <button value="decrypt" className={processType === 'decrypt' ? 'active': ''} onClick={handleSelect}>
                  Decrypt
              </button>
            </div>
        </div>
    );
}

export default Options;