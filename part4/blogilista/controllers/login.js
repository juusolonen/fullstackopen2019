const loginRouter = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

<<<<<<< HEAD
loginRouter.post("/", async (req, res) => {
    console.log(req.body)
=======
loginRouter.post('/', async (req, res) => {

>>>>>>> 0269b3cc8d4c7cef95d7964c3dd83d3559b3a9a3
    const user = await User.findOne({username: req.body.username})

    if(user) {

        const correctPwd = await bcrypt.compare(req.body.password, user.passwordHash)

        if (correctPwd) {

            const userToSend = {
                username: user.username,
                name: user.name,
                id: user._id
            }

            const token = jwt.sign(userToSend, process.env.SECRET)

            return res.status(200).send({token, username: user.username, name: user.name})
        } else {
            return res.status(401).json({error: "invalid username or password"})
        }
    } else {
        return res.status(401).json({error: "invalid username or password"})
    }

})

module.exports = loginRouter