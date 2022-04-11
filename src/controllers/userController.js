const userModel = require("../models/userModel")

const createUser= async function (req, res) {

    let data = req.body// i made mistake here i wrote req.data instead of req.body
    // console.log(data)
    let saveData = await userModel.create(data)//mongodb will assign an id
    res.send( {msg:saveData})
}

const getUserData = async function (req, res) {

    let allUsers = await userModel.find()
    res.send( {msg:allUsers} )
}
module.exports.createUser = createUser
module.exports.getUserData = getUserData