import React from "react";
import Select from 'react-select'

import s from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

const Header = () => {


    const options = [
        {value: 'city-1', label: 'Moscow'},
        {value: 'city-2', label: 'Lisbon'},
        {value: 'city-3', label: 'Mexico'}
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        }),
    }

    return (
        <div>
            <header className={s.header}>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <GlobalSvgSelector id='header-logo'/>
                    </div>
                    <div className={s.title}>Weather Today</div>
                </div>
                <div className={s.wrapper}>
                    <div className={s.changeTheme}>
                        <GlobalSvgSelector id='change-theme'/>
                    </div>
                    <div className={s.hello}>
                        <Select defaultValue={options[1]} styles={colourStyles} options={options}/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;