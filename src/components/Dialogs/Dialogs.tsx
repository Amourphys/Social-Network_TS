import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props: any) => {

    let dialogs = [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Popandopola' },
        { id: 4, name: 'Juriy' },
        { id: 5, name: 'Bonyfacij' },
        { id: 6, name: 'Sasha' },
        { id: 7, name: 'Arnold' }
    ]
    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Good by' },
        { id: 4, message: 'IT' },
        { id: 5, message: 'How are you' },
        { id: 6, message: 'What is your name?' },
        { id: 7, message: 'I am dont now' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Messages message={m.message} id={m.id} />)

    /* let state = props.dialogsPage; */

    /* let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />); */
    /* let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>); */
    /* let newMessageBody = state.newMessageBody; */

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea /* value={newMessageBody} */ onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>

    );
};

export default Dialogs;