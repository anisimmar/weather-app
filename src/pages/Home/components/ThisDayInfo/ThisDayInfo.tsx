import React from "react";
import s from './ThisDayInfo.module.scss'
import cloudy from '../../../../assets/images/cloudy.png'
import {IndicatorSvgSelector} from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import ThisDayItem from "./ThisDayItem";

export interface Item {
    iconId: string,
    name: string,
    value: string,
}


const ThisDayInfo = () => {

    const items = [
        {
            iconId: 'temp',
            name: 'Temperature',
            value: '20° - feels like 17°',
        },
        {
            iconId: 'pressure',
            name: 'Air pressure',
            value: '765 mm of mercury column - normal',
        },
        {
            iconId: 'precipitation',
            name: 'Precipitation',
            value: 'No precipitation',
        },
        {
            iconId: 'wind',
            name: 'Wind',
            value: '3 m/s southwest - light wind',
        }
    ]

    return (
        <div className={s.this_day_info}>
            <div className={s.info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem  key={item.iconId} item={item}/>
                ))}
            </div>
            <img src={cloudy} alt="cloudy"/>
        </div>
    )
}

export default ThisDayInfo;