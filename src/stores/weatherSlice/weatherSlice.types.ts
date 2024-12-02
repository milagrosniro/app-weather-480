import { number, object, string, z } from "zod";
import { ENGLISH, SPANISH } from "../../constants";

export type TLanguage = typeof SPANISH | typeof ENGLISH

export interface ISearchState{
    country: string;
    city: string;
}

export const Weather = z.object({
    name: z.string(),
    main: z.object({  
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
        humidity: z.number(),
    }),
    wind: z.object({
        speed: z.number()
    }),
    weather: z.array(z.object({
        id: z.number(),
        main: z.string(),
        description: z.string(),
        icon: z.string()
    }))

})

export type TWeather = z.infer<typeof Weather>

export const WeatherSchema = object({
    name: string(),
    main: object({
        temp: number(),
        temp_max: number(),
        temp_min: number()
    })

})

export interface IWeatherSlice {
    auth: boolean,
    setAuth: (auth: boolean) => void,
    loading:boolean,
    foundData: boolean,
    weatherData: TWeather,
    getWeather: (search: ISearchState) => Promise<unknown>
}

