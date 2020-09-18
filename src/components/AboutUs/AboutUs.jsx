import React from 'react';
import s from './AboutUs.module.css';

function AboutUs() {

    return (
        <div className={s.aboutUs}>
            <div className={s.main}>
                <div className={s.aboutUsBlock}>
                    <p className={s.header1}>О нас</p>
                    <p className={s.header2}>Компания&nbsp; <p className={s.header3}> ИвановПром</p></p>
                    <p className={s.aboutUsText}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                </div>
                <div className={s.blocks}>
                    <div className={s.block}><p className={s.number}>90</p><p className={s.text}>Завершено крупных сделок</p><p className={s.link}>Все кейсы</p></div>
                    <div className={s.block}><p className={s.number}>90</p><p className={s.text}>Завершено крупных сделок</p><p className={s.link}>Все кейсы</p></div>
                    <div className={s.block}><p className={s.number}>90</p><p className={s.text}>Завершено крупных сделок</p><p className={s.link}>Все кейсы</p></div>
                    <div className={s.block}><p className={s.number}>90</p><p className={s.text}>Завершено крупных сделок</p><p className={s.link}>Все кейсы</p></div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs
