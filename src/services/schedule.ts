// @packages
import axios from "axios";

// @scripts
import { config } from "../core/config"
import { setShows } from "../core/store/shows/showsSlice"


export const getShows = () => async (dispatch: any) =>  {
    try {
        const data: string[] = await axios.get(config.services.getShows)
        dispatch(setShows({shows: data}))
    } catch (error) {
        console.error(error)
    }
}