import axios from "axios";

const APIFavorites = axios.create({baseURL: "http://localhost:8000/favorites"})

async function getFavorites() {
    const response = await APIFavorites.get('/')

    return response.data
}

async function postFavorite(id) {
    await APIFavorites.post(`/${id}`)
}

async function deleteFavorite(id) {
    await APIFavorites.delete(`/${id}`)
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite
}