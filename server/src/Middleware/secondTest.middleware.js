module.exports = function (req, res, next) {
    console.log("2.middleware");
    next();
}