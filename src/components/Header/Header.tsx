import React from 'react';
import s from './Header.module.css';
import logo from '../../img/JUriynetwork.png';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} className={s.logo} alt="logo" />
            <div className={s.loader_wrapper}>
                <div className={s.loader}>
                    <div className={s.outer}></div>
                    <div className={s.middle}></div>
                    <div className={s.inner}></div>
                </div>
                <div className={s.pulse}></div>

                <h1 className={s.title}>Welcome to JUriy Network</h1>

                <div className={s.pulse}></div>
                <div className={s.loader}>
                    <div className={s.outer}></div>
                    <div className={s.middle}></div>
                    <div className={s.inner}></div>
                </div>
            </div>


        </header>
    )
}

export default Header;