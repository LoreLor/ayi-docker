const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs');

const conn = mongoose.createConnection(MONGO_URI);
conn.on('connected', () => {
    console.log('✅ Conectado a Mongo Atlas');
  });
  
const Character = conn.model('Character', require('./schemas/characterSchema'));
const Film = conn.model('Film', require('./schemas/filmSchema'));
const Planet = conn.model('Planet', require('./schemas/planetSchema'));

/* Prueba de Conexion
Character.find()
    .then(characters => console.log(characters))
    .catch(err => console.error(err));
*/

module.exports = {
    Character,
    Film,
    Planet
}