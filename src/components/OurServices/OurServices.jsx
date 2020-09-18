import React from 'react';
import s from './OurServices.module.css';

function OurServices() {

    return (
        <div className={s.ourServices}>
            <div className={s.main}>
                <p className={s.header1}>Наши услуги</p>
                <p className={s.header2}>Мы специализируемся</p>
                <div className={s.blocks}>
                    <div className={s.block}><p className={s.content}>Бухгалтерское обслуживание</p></div>
                    <div className={s.block}><p className={s.content}>Бухгалтерское обслуживание</p></div>
                    <div className={s.block}><p className={s.content}>Бухгалтерское обслуживание</p></div>
                    <div className={s.block}><p className={s.content}>Бухгалтерское обслуживание</p></div>
                    <div className={s.block}><p className={s.content}>Бухгалтерское обслуживание</p></div>
                    <div className={s.block}><p className={s.content}>Бухгалтерское обслуживание</p></div>
                </div>
            </div>
        </div>
    );
}

export default OurServices
