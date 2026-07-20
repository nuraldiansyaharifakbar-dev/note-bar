import axios from "axios"

export default axios.create({
    baseURL: "https://data-debt.vercel.app/api",
});