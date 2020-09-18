import React from 'react';
import s from './Footer.module.css';

function Footer() {

    return (
        <div className={s.footer}>
            <div className={s.mainBlock}>
                <div className={s.footerText}>2019 (с) Все права защищены. БухОне.ру</div>
                <div className={s.footerText}>Разработано: BuhOne</div>
            </div>
        </div>
    );
}

export default Footer
