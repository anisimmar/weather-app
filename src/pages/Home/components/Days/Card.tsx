import React from 'react'
import {GlobalSvgSelector} from '../../../../assets/icons/global/GlobalSvgSelector';
import {Day} from './Days';
import s from './Days.module.scss'


interface Props {
    day: Day
}

const Card = ({day}: Props) => {

    const {day_name, day_info, icon_id, info, temp_day, temp_night} = day;

    return (
        <div className={s.card}>
            <div className={s.day_name}>
                {day_name}
            </div>
            <div className={s.day_info}>{day_info}</div>
            <div className={s.icon_id}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.temp_day}>{temp_day}</div>
            <div className={s.temp_night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}

export default Card;