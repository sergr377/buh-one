import React from 'react';
import s from './Contact.module.css';
import phone from './../../images/Vector.png'
import mail from './../../images/Frame.png'

function Contact() {

    return (
        <div className={s.сontact}>
            <div className={s.main}>
                <div className={s.contactsBlock}>
                    <p className={s.header}>Связь с нами</p>
                    <p className={s.text}>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
                    <div className={s.contacts}>
                        <p className={s.сontactData}><img src={phone}></img> &nbsp; +7 (111) 222-33-44</p>
                        <p className={s.сontactData}><img src={mail}></img> &nbsp; order@bu-one.ru</p>
                    </div>
                </div>
                <div className={s.fieldsBlock}>
                    <div className={s.nameFieldBlock}>
                        <p className={s.field}>Фамилия</p>
                        <p className={s.example}>Иванов</p>
                    </div>
                    <div className={s.mailFieldBlock}>
                        <p className={s.field}>Сообщение</p>
                        <p className={s.example}>Ваше сообщение</p>
                    </div>
                    <button className={s.button}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    );
}

export default Contact
