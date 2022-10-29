import React, {useEffect} from 'react';
import * as ReactDOM from 'react-dom/client';
import closeIcon from '../assets/closeIcon.png';

import './commandModal.css';

const Background = (props) => {
    return <div onClick={props.closeModal} className='modal-background'>{props.children}</div>
}

const Modal = (props) => {
    return (
    <div className='modal'>
        <div className='img-container' onClick={props.closeModal}><img src={closeIcon} width="20" height="20"></img> </div>
        <h3>Voice Commands in English</h3>
        <ul>
            <li><a>"Hello"</a></li>
            <li><a>"Hi"</a></li>
            <li><a>"Good day"</a></li>
            <li><a>"Hey"</a></li>
            <li><a>"Who is your maker?"</a></li>
            <li><a>"Tell me about Michael?"</a></li>
            <li><a>"Should I hire Michael?"</a></li>
            <li><a>"clear" - CLEAR TRANSCRIPTS</a></li>
        </ul>
    </div>)
}

const CommandsModal = (props) => {
    const {
        visible,
        closeModal
    } = props;
    // const root = ReactDOM.createRoot(document.getElementById('App'));
    if(visible) {
        return (
        <>
        <Modal closeModal={closeModal}></Modal>
        <Background closeModal={closeModal}>
        </Background>
        </>
        );
    }
}

export default CommandsModal;