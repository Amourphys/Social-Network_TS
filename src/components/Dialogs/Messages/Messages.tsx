import React from 'react';
import s from './../Dialogs.module.css';

type MessagesPropsType = {
    message: string
    id: number
}

const Messages = (props: MessagesPropsType) => {
    const { message } = props
    return (
        <div className="message">{message}</div>
    )
}

export default Messages;