import React from "react";
import s from './Popup.module.scss'
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import {Item} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

interface Props {

}

const Popup = ({}: Props) => {

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
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.temp}>
                        12°
                    </div>
                    <div className={s.day_name}>
                        Wednesday
                    </div>
                    <div className={s.img}>
                        <GlobalSvgSelector id='sun'/>
                    </div>
                    <div className={s.time}>Time: <span>21:09</span></div>
                    <div className={s.city}>City: <span>Lisbon</span></div>
                </div>
                <div className={s.info_items}>
                    {items.map((item: Item) => (
                        <ThisDayItem key={item.iconId} item={item}/>
                    ))}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id='close'/>
                </div>
            </div>
        </>
    )
}

export default Popup;