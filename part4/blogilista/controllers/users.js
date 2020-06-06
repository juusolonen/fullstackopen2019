const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (req, res) => {

    const rounds = 10
    const passwordHash = await bcrypt.hash(req.body.pwd, rounds)

    const user = new User({
        username: req.body.username,
        name: req.body.name,
        passwordHash
    })

    const savedUser = await user.save()

    res.json(savedUser)
})

usersRouter.get('/', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

module.exports = usersRouter