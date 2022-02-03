//import React from 'react';
//import { NavLink } from 'react-router-dom';
import { DialogPageType } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messages/Message';

const Dialogs = (props: DialogPageType) => {

    const { dialogs, messages, newMessageBody } = props


    /* let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />) */
    /* let messagesElements = messages.map(m => <Messages message={m.message} id={m.id} />) */

    /* let state = props.DialogPageType; */

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);


    /* let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
 */
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            {/* <div>
                {<div>
                    <textarea  value={newMessageBody}  onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                    <button>Remove</button>
                </div>}
            </div> */}
        </div>

    );
};

export default Dialogs;