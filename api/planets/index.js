const server = require('./src/server');
const { PORT } = require('./src/config/envs');

server.listen(PORT, () => {
    console.log(`Planets API listening on port ${PORT}`);
});