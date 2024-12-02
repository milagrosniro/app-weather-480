import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createWeatherSlice } from "./weatherSlice/weatherSlice";
import { IWeatherSlice } from "./weatherSlice/weatherSlice.types";

export const useAppStore = create<IWeatherSlice>()(
    devtools((...a)=>({
        ...createWeatherSlice(...a)
    }))
)

