import React from "react";
import s from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import {Weather} from "../../../../store/types/types";

interface Props {
    weather: Weather,
}

const ThisDay = ({weather}: Props) => {

    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.wrapper}>
                    <div className={s.temp}>
                        {Math.round(weather.main.temp)}°
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