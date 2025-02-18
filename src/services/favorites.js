import axios from "axios";

const APIFavorites = axios.create({baseURL: "http://localhost:8000/favorites"})

async function getFavorites() {
    const response = await APIFavorites.get('/')

    return response.data
}

export {
    getFavorites,
}