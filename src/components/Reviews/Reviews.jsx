import React from 'react';
import s from './Reviews.module.css';
import avatar from '../../images/Ellipse.png'
import dot from '../../images/EllipseB.png';
import sliderButtonP from '../../images/slider__button-prev (1).png';
import sliderButtonN from '../../images/slider__button-next (1).png';

function Reviews() {

    return (
        <div className={s.aboutUs}>
            <div className={s.main}>
                <p className={s.header1}>Отзывы</p>
                <p className={s.header2}>Ваши благодарности</p>
                <div className={s.slider}>
                    <div className={s.sliderContent}>
                        <p className={s.aboutUsText}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                        <div className={s.profile}>
                            <img src={avatar}></img>
                            <div className={s.info}>
                                <p className={s.name}>Eкатерина Иванова</p>
                                <p className={s.jobName}>Директор ООО "Раз-Два"</p></div>
                        </div>
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
        </div>
    );
}

export default Reviews
