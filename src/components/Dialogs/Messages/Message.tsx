//import React from 'react';
import s from './../Dialogs.module.css';
import { MessageType } from '../../../redux/state';

const Message = (props: MessageType) => {
    const { message, id } = props
    return (
        <div className="message">{message}</div>
    )
}

export default Message;