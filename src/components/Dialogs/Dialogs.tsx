import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props: any) => {

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
            <div className={s.dialogsItems}></div>
            <div className={s.messages}></div>
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