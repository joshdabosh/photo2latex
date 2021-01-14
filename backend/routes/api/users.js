const express = require('express');
const jwt = require('jsonwebtoken');

const uuid = require('uuid');

const secret = require('crypto').randomBytes(64);

console.log(secret);

const router = express.Router();

const { insertUser, getUser, checkUsernameAvailable} = require('../../db/users');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        if(!username) throw "Missing field 'username'"
        if(!password) throw "Missing field 'password'"

        const avail = await checkUsernameAvailable(username)
        
        if (!avail){
            throw "Username taken"
        }
        
        res.json(
            await insertUser({
                name: username,
                pass: password,
            })
        );
    } catch (e) {
        res.status(400)
        res.send(e.toString())
    }
});

router.post('/auth', async (req, res) => {
    const { username, password } = req.body;

    const user = await getUser(username, password);

    if (user.length == 1) {
        const accessToken = jwt.sign({ username: user[0].user }, secret);

        res.json({
            accessToken,
        });
    } else {
        res.status(401);
        res.send('Unauthorized');
    }
});

module.exports = router;
