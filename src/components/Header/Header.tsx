import React from 'react';
import s from './Header.module.css';
import logo from '../../img/JUriynetwork.png';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} className={s.logo} alt="logo" />
        </header>
    )
}

export default Header;