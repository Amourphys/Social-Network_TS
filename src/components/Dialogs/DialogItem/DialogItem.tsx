import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    const { name, id } = props
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog} >
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;