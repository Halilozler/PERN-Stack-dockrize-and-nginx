module.exports = function (req, res, next) {
    console.log("1.middleware");
    next();
}