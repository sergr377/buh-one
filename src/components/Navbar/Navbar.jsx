import React from 'react';
import s from './Navbar.module.css';
import logo from '../../images/logo.png'
import phone from './../../images/Vector (1).png'
import clock from './../../images/Group 2.png'
import mail from './../../images/Group.png'
import placeholder from './../../images/Vector (2).png'


function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.navbuttonCenter}>
                <div className={s.logoBlock}>
                    <img className={s.logo} src={logo}></img>
                    <p className={s.buhOne}>BuhOne</p>
                </div>
                <div className={s.mainBlock}>
                    <div className={s.middleBlock}>
                        <p className={s.topLineInfo} ><img src={phone}></img> &nbsp; 8 (111) 222-33-44</p>
                        <p className={s.topLineInfo} ><img src={clock}></img> &nbsp; Пн-Пт 10:00-18:00</p>
                        <p className={s.topLineInfo} ><img src={mail}></img> &nbsp; order@buhone.ru</p>
                        <p className={s.topLineInfo} ><img src={placeholder}></img> &nbsp; Невский пр. 130</p>
                    </div>
                    <div className={s.middleBlock}>
                        <p className={s.navLink} >Главная</p>
                        <p className={s.navLink} >Услуги</p>
                        <p className={s.navLink} >Кейсы</p>
                        <p className={s.navLink} >О компании</p>
                        <p className={s.navLink} >Контакты</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar

