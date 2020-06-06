const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (req, res) => {

    if(!req.body.username) {
       return res.status(400).json({error: 'missing username'})
    }
    if(!req.body.pwd) {
        return res.status(400).json({error: 'missing password'})
    }
    if(req.body.pwd.length < 3) {
        return res.status(400).json({error: 'password must have at least 3 characters'})
    }


    const rounds = 10
    const passwordHash = await bcrypt.hash(req.body.pwd, rounds)

    const user = new User({
        username: req.body.username,
        name: req.body.name,
        passwordHash
    })

    try {
        const savedUser = await user.save()

        res.json(savedUser)
    } catch(excp) {
        res.status(400).json(excp.message)
    }

})

usersRouter.get('/', async (req, res) => {
    const users = await User
    .find({}).populate('blogs', {url: 1, title: 1, author: 1, id: 1})
    res.json(users)
})

module.exports = usersRouter