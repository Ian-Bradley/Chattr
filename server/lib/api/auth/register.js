const dbQuery = require('../../db/root.query.js');
const config = require('../../../config.env.js');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
/*================================================*/
/*================================================*/
// ROUTE: => REGISTER
router.post('/', async function (req, res) {
    console.log('=====REGISTER======');
    console.log('req.body: ', req.body);
    try {
        // ==> Validate data for account requirements
        const { name, password } = req.body;
        if (!(name && password)) {
            res.status(400).json({ error: 'Missing data' });
        }
        if (name.length < 3 || password.length < 3) {
            res.status(400).json({ error: 'Invalid name or password length' });
        }

        // ==> Determine is user exists in DB
        const existingUser = await dbQuery.user.getUser(name);
        console.log('existingUser: ', existingUser);
        if (existingUser && existingUser.length) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // ==> Insert new user in DB
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = {
            name: name,
            password: encryptedPassword,
        };
        const results = await dbQuery.user.insertUser(user);

        // ==> Add JWT for authentication
        // const token = jwt.sign({ user_id: user.id, user_name: user.name }, config.jwt.key_private, {
        //     algorithm: config.jwt.alg,
        //     expiresIn: config.jwt.expire,
        // });
        // user.token = token;

        // ==> END
        res.status(201).json({ success: results.command + results.rowCount.toString() });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
/*================================================*/
/*================================================*/
module.exports = router;