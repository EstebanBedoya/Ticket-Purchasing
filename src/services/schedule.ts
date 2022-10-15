// @packages
import axios from "axios";

// @scripts
import { config } from "../core/config"

export const getShows = async () => {
    try {
        return await axios.get(config.services.getShows)
    } catch (error) {
        console.error(error)
    }
}