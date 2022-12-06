const userLogin = async(req, res) => {
    console.log("1.controller");
    res.status(201).json({
        mes: "user controller"
    })
}

module.exports = {
    userLogin,
}