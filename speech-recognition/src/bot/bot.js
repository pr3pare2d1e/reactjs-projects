import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import CommandsModal from '../commandsModal/commandsModal';

import './bot.css';


const Bot = (props) => {
    const userCharacterLimit = 75;

    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const commands = [
            //greetings
            {
              command: 'Hello',
              callback: () => setMessage('Hello friend!'),
              matchInterim: true
            },
          {
              command: 'Hi',
              callback: () => setMessage('Hi friend!'),
              matchInterim: true
          },
          {
              command: 'Good day',
              callback: () => setMessage('Fine day sir!'),
              matchInterim: true
          },
          {
              command: 'Hey',
              callback: () => setMessage('Sup dude!'),
              matchInterim: true
          },
      
      
          //questions about me
          {
            command: 'Who is your maker?',
            callback: (food) => setMessage(`My codemaker is Michael, a fantastic dev!`)
          },
          {
            command: 'Tell me about Michael',
            callback: (condition) => setMessage(`Today, the weather is ${condition}`)
          },
          {
            command: 'Should I hire Michael',
            callback: () => setMessage('My pleasure')
          },
      
          //question that require api data:
          {
              command: 'What is the weather like today',
              callback: () => setMessage('Test Data')
          },
          //command to clear transcripts
          {
            command: 'clear',
            callback: ({ resetTranscript }) => resetTranscript()
          }
    ]


    const { transcript, resetTranscript, listening } = useSpeechRecognition({commands});


  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const handleCommandList = () => {
      setVisible((prevState) => {
        return !prevState
      })
  }


  const handleTranscript = (transcript) => {
    let userText = '';
    if(transcript.length > userCharacterLimit) {
      userText = '...' + transcript.substring(transcript.length - userCharacterLimit, transcript.length);
    }else {
      userText = transcript
    }
    return userText;
  }
    

        

    return(
    <>
    <CommandsModal visible={visible} closeModal={handleCommandList}></CommandsModal>
    <div className='main-container'>
        <div className='title-container'>
          <h1>Simple Voice Bot</h1>
          <button onClick={handleCommandList}>Check Commands</button>
        </div>
        <div className='bot-container'>
          <div className='input-container'>
            <button className={listening ? 'active-listening': ''} onClick={SpeechRecognition.startListening.bind(null, { continuous: true })}>Start</button>
            <button className={listening ? '': 'active-stop'} onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
          </div>
          <h1>user</h1>
          <span>{handleTranscript(transcript)}</span>
          <h2>bot</h2>
          <p>{message}</p>
      </div>
    </div>
    </>
    )
}

export default Bot;