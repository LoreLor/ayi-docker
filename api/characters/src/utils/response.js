module.exports = (res, statusCode, data) => {
    res.status(statusCode).send(data)
};