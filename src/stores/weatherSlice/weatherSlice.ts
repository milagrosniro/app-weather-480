import { StateCreator } from "zustand";
import { getCoordinates, getWeatherData } from "../../services/getWeather";
import { ISearchState, IWeatherSlice, TWeather, Weather } from "./weatherSlice.types";

export const createWeatherSlice : StateCreator<IWeatherSlice> = ((set)=>({
    auth: localStorage.getItem('auth') === 'true' ? true : false,
    setAuth: (auth: boolean) => { set(()=>({auth})) },
    loading: false,
    weatherData: {} as TWeather,
    foundData: true,
    getWeather: async (data: ISearchState) => {

        const {city, country} = data

        set(()=>({loading: true}))

        try{
            const {lat, lon} = await getCoordinates(city, country)
            const dataWeather = await getWeatherData(lat,lon);

            const result = Weather.safeParse(dataWeather);
            if(!result.success) throw new Error('Invalid weather data')

             set(()=>({weatherData: dataWeather}))


        }catch(err){
            console.log(err)
           return err
        }finally{
        set(()=>({loading: false}))

        }
    }
    }
))