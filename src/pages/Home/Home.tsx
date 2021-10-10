import React from "react";
import s from './Home.module.scss'
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";

const Home = () => {
    return (
        <div className={s.home}>
            <ThisDay/>
            <ThisDayInfo/>
        </div>
    )
}

export default Home;