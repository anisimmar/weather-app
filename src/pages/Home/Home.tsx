import React, {useEffect} from "react";
import s from './Home.module.scss'
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunk/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../store/selectors";

const Home = () => {

    const dispatch = useCustomDispatch();
    const {weather} = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('moscow'))
    }, [])

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    )
}

export default Home;