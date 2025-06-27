const axios = require('axios')

module.exports = {
    list: async () => {
        const films = await axios.get('http://db:7004/Film') //sin gateway http://localhost:7004/Film
        return films.data
    },

    getById: async (id) => {
        const film = await axios.get(`http://db:7004/Film/${id}`) //sin gateway http://localhost:7004/:id
        return film.data
    },

    insert: async (dataBody) => {
        const newFilm = await axios.post('http://db:7004/Film', dataBody) //sin gateway http://localhost:7004/:databody
        return newFilm.data
    }
}
