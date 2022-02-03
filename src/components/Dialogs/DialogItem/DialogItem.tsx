import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';
import { DialogType } from '../../../redux/state';

const DialogItem = (props: DialogType) => {
    const { name, id } = props
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog} >
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;