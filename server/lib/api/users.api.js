const dbQuery = require('../db/root.query.js');
const express = require('express');
const router = express.Router();
/*================================================*/
/*================================================*/
// ROUTE: => GET user (name||id)
router.get('/:value', async function (req, res) {
    try {
        console.log('GET: user:name||id');
        let output = await dbQuery.users.getUser(req.params.value);
        res.status(200).json(output);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});
/*================================================*/
/*================================================*/
// ROUTE: => POST user (disabled in favour of /register)
router.post('/', async function (req, res) {
    // try {
    //     console.log('POST: user');
    //     const result = await dbQuery.users.insertUser(req.body);
    //     res.status(201).json(result);
    // } catch (err) {
    //     res.status(400).send(err);
    //     console.log(err);
    // }
    res.status(400).end('User creation is done with the "/register" route');
});
/*================================================*/
/*================================================*/
// ROUTE: => PUT user (name||id)
router.put('/:value', async function (req, res) {
    try {
        console.log('PUT: user:name||id');
        const result = await dbQuery.users.updateUser(req.params.value, req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});
/*================================================*/
/*================================================*/
// ROUTE: => DELETE user (name||id)
router.delete('/:value', async function (req, res) {
    try {
        console.log('DELETE: user:name||id');
        const result = await dbQuery.users.deleteUser(req.params.value, req.body);
        res.status(204).json(result);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});
/*================================================*/
/*================================================*/
// ROUTE: => GET users (all - use with caution)
// router.get('/', async function (req, res) {
//     try {
//         console.log('GET: users');
//         let output = await dbQuery.users.getUsers();
//         res.status(200).json(output);
//     } catch (err) {
//         res.status(400).send(err);
//         console.log(err);
//     }
// });
/*================================================*/
/*================================================*/
// ROUTE: => GET users for room (room_id - FOREIGN KEY)
// router.get('/:id', async function (req, res) {
//     try {
//         console.log('GET: users:id');
//         let output = await dbQuery.users.getUsersByRoomID(req.params.id);
//         res.status(200).json(output);
//     } catch (err) {
//         res.status(400).send(err);
//         console.log(err);
//     }
// });
/*================================================*/
/*================================================*/
module.exports = router;