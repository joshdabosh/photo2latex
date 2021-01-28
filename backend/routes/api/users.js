const express = require('express')
const jwt = require('jsonwebtoken')

const uuid = require('uuid')

const argon2 = require('argon2')

const secret = require('crypto').randomBytes(64)

const router = express.Router()

const {
    insertUser,
    getUser,
    checkUsernameAvailable,
} = require('../../db/users')

router.post('/register', async (req, res) => {
    const { username, password } = req.body
    try {
        if (!username) throw "Missing field 'username'"
        if (!password) throw "Missing field 'password'"

        const avail = await checkUsernameAvailable(username)

        if (!avail) {
            throw 'Username taken'
        }

        await insertUser({
            name: username,
            pass: await argon2.hash(password),
        })

        const accessToken = jwt.sign({ username: username }, secret)

        res.json(accessToken)
    } catch (e) {
        res.status(400)
        res.send(e.toString())
    }
})

router.post('/auth', async (req, res) => {
    const { username, password } = req.body

    const user = await getUser(username)

    if (user.length == 1) {
        if (await argon2.verify(user[0].pass, password)) {
            const accessToken = jwt.sign({ username: user[0].user }, secret)

            res.json({
                accessToken,
            })
        } else {
            res.status(401)
            res.send('Unauthorized')
        }
    } else {
        res.status(401)
        res.send('Unauthorized')
    }
})

module.exports = router
