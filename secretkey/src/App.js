import React, {useState} from 'react';

import Options from './components/options/options';
import PassUI from './components/pass-ui/pass-ui';

import * as encrypt from './components/encryption/encryption';

import './App.css';

function App() {
  const [processType, setProcessType] = useState('encrypt');
  const [text, setText] = useState('');

  const handleProcess = (secretKey) => {
    console.log(`execute handleProcess Type: ${processType}`);
    switch(processType) {
      case 'encrypt':
        const encryptionData = encrypt.startEncryption(secretKey, text);
        setText(encryptionData);
      break;
      case 'decrypt':
        const decryptionData = encrypt.startDecryption(secretKey, text);
        setText(decryptionData);
      break;
      default:
        console.warn(`ProcessType ERROR: 404 | ${processType}`)
      break;
    }

  }

  return (
    <main className="main">
        <Options processType={processType} handleProcessChange={setProcessType} />
        <div className='container'>
            <PassUI processType={processType} text={text} updateText={setText} handleProcess={handleProcess}/>
        </div>
    </main>
  );
}

export default App;
