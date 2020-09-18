import React from 'react';
import s from './FirstScreen.module.css';
import dot from '../../images/EllipseXS.png';
import sliderButtonP from '../../images/slider__button-prev.png';
import sliderButtonN from '../../images/slider__button-next.png';

function FirstScreen() {
    return (
        <div className={s.firstScreen}>
            <div className={s.slider}>
                <div className={s.sliderContent}>
                    <p className={s.header}>Бухгалтерские услуги в Санкт-Петербурге</p>
                    <button className={s.button}>Наша презентация</button>
                </div>
                <div className={s.navigation}>
                    <div className={s.dotsGroupe}>
                        <img src={dot}></img>
                        <img src={dot}></img>
                        <img src={dot}></img>
                        <img src={dot}></img>
                    </div>
                    <div className={s.buttonsGroupe}>
                        <img src={sliderButtonP}/>
                        <img src={sliderButtonN}/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FirstScreen
