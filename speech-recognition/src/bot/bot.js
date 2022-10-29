import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './bot.css';


const Bot = (props) => {
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

    const { transcript,interimTranscript,finalTranscript, resetTranscript } = useSpeechRecognition({commands});
    useEffect(() => {
      if (finalTranscript !== '') {
       console.log('Got final result:', finalTranscript);
      }
      }, [interimTranscript, finalTranscript]);
    console.log(transcript);


  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
    

        

    return(
    <div>
        <h1>Simple Talking Robot</h1>
        <div className='bot-container'>
          <button onClick={SpeechRecognition.startListening.bind(null, { continuous: true })}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <h1>user</h1>
          {finalTranscript.split(/[.?]+/).map((el, i) => {
            return (<span key={i} className='text'>{el}</span>);
          })}
          <h2>bot</h2>
          <p>{message}</p>
      </div>
    </div>
    )
}

export default Bot;