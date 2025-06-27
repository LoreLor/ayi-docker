const { Schema } = require('mongoose');

const characterSchema = new Schema({
    _id: {
        type: String,
    },
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: {
        type: String,
        enum: ["male", "female", "n/a"],
    },
    species: String,
    homeworld: {
        type: String,
        ref: "Planet",
    },
    image: String,
    films: [{
        type: String,
        ref: "Film"
    }]
});

//** Métodos estáticos */
characterSchema.statics.list = async function() {
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
};

characterSchema.statics.getById = async function(id) {
    return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
};

characterSchema.statics.insert = async function(character) {
    return await this.create(character);
};

module.exports = characterSchema;