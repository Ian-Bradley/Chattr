const dbQuery = require('../../db/root.query.js');
const express = require('express');
const router = express.Router();
/*================================================*/
/*================================================*/
// ROUTE: => GET room (name||id)
router.get('/:value', async function (req, res) {
    try {
        console.log('GET: room:name||id');
        let output = await dbQuery.rooms.getRoom(req.params.value);
        res.status(200).json(output);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});
/*================================================*/
/*================================================*/
// ROUTE: => POST room
router.post('/:value', async function (req, res) {
    try {
        console.log('POST: room');
        const result = await dbQuery.rooms.insertRoom(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});
/*================================================*/
/*================================================*/
// ROUTE: => PUT room (name||id)
router.put('/:value', async function (req, res) {
    try {
        console.log('PUT: room:name||id');
        const result = await dbQuery.rooms.updateRoom(req.params.value, req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});
/*================================================*/
/*================================================*/
// ROUTE: => DELETE room (name||id)
router.delete('/:value', async function (req, res) {
    try {
        console.log('DELETE: room:name||id');
        const result = await dbQuery.rooms.deleteRoom(req.params.value, req.body);
        res.status(204).json(result);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});
/*================================================*/
/*================================================*/
// ROUTE: => GET rooms (all - use with caution)
// router.get('/', async function (req, res) {
//     try {
//         console.log('GET: rooms');
//         let output = await dbQuery.rooms.getRooms();
//         res.status(200).json(output);
//     } catch (err) {
//         res.status(400).send(err);
//         console.log(err);
//     }
// });
/*================================================*/
/*================================================*/
module.exports = router;