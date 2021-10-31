import React from "react";
import Select from 'react-select'

import s from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

const Header = () => {

    const theme = useTheme()

    //const [theme, setTheme] = React.useState('light');

    const options = [
        {value: 'city-1', label: 'Moscow'},
        {value: 'city-2', label: 'Lisbon'},
        {value: 'city-3', label: 'Mexico'}
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000'
        }),
    }


    const changeTheme = () => {
        //setTheme(theme === 'light' ? 'dark' : 'light');
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
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
                    <div className={s.changeTheme} onClick={changeTheme}>
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