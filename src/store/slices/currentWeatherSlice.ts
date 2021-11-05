import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/types";
import {AxiosResponse} from "axios";

type currentWeather = {
    weather: Weather,
    isLoading: boolean,
    response: Response,
}

type Response = {
    status: number,
    message: string
}

const initialState: currentWeather = {
    weather: {
        main: {
            temp: 0,
        }
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
}

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState: initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(state, action) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
    }
})

export default currentWeatherSlice.reducer