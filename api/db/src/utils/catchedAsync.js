module.exports = (fnController) => {
    return async (req, res, next) => {
        fnController(req, res).catch((err) => {
            next(err);
        })
    }
};