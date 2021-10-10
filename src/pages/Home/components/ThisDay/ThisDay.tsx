import React from "react";
import s from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";

const ThisDay = () => {
    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.wrapper}>
                    <div className={s.temp}>
                        20°
                    </div>
                    <div className={s.day}>
                        Today
                    </div>
                </div>
                <GlobalSvgSelector id='sun'/>
            </div>
            <div className={s.bottom_block}>
                <div className={s.time}>Time: <span>21:09</span></div>
                <div className={s.city}>City: <span>Lisbon</span></div>
            </div>
        </div>
    )
}

export default ThisDay;