exports.validateCreatUser = function (req, res, next) {
    if (!req.body.username) {
        return next(new Error('require_username'));
    }
    if (!req.body.age) {
        return next(new Error('require_age'));
    }
    return next();
}