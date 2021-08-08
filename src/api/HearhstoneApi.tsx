import axios from "axios"
import { API_KEY, BASE_URL, HOST } from "../config"

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': HOST
  }
})