import React from 'react';
import s from './OurClients.module.css';
import logo from '../../images/Rectangle 2.png'
import dot from '../../images/EllipseB.png';
import sliderButtonP from '../../images/slider__button-prev (1).png';
import sliderButtonN from '../../images/slider__button-next (1).png';

function OurClients() {

    return (
        <div className={s.ourServices}>
            <div className={s.main}>
                <p className={s.header1}>Наши клиенты</p>
                <p className={s.header2}>С нами работают</p>
                <div className={s.blocks}>
                    <img src={logo}></img>
                    <img src={logo}></img>
                    <img src={logo}></img>
                    <img src={logo}></img>
                </div>
                <div className={s.navigation}>
                    <div className={s.dotsGroupe}>
                        <img src={dot}></img>
                        <img src={dot}></img>
                        <img src={dot}></img>
                        <img src={dot}></img>
                    </div>
                    <div className={s.buttonsGroupe}>
                        <img src={sliderButtonP} />
                        <img src={sliderButtonN} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurClients
