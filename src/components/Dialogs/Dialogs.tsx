import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}></div>
            <div className={d.messages}></div>
            <div>
                <div>
                   
                </div>
                <div>
                   
                    <button>Remove</button>
                </div>
            </div>
        </div>
        
    );
};

export default Dialogs;