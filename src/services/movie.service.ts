import axios from "axios"
import config from '../env/config.json'

const api_url = `${config.api_url}/movies`
export class MovieService {

    static async getDefault() {
        const res = await axios.get(api_url)
        return res.data.data
    }
    static async searchByTitle(title: string) {
        const res = await axios.get(`${api_url}/search?title=${title}`)
        return res.data
    }

    static async getFullMovie(movieId: string) {
        const res = await axios.get(`${api_url}/fullInfo/${movieId}`)
        return res.data
    }
}