const pool = require('../db.js');
const users = {
    /*================================================*/
    /*================================================*/
    // QUERY: => getUser
    getUser: async function (value) {
        try {
            const client = await pool.connect();
            let query = '';
            if (parseInt(value)) {
                query = `SELECT * FROM users WHERE id = ${value};`;
            } else {
                query = `SELECT * FROM users WHERE UPPER(name) = UPPER('${value}');`;
            }
            const results = await client.query(query);
            client.release();
            return results.rows;
        } catch (error) {
            console.error(error);
            return [error.severity + ': ' + error.routine];
        }
    },
    /*================================================*/
    /*================================================*/
    // QUERY: => insertUser
    insertUser: async function (user) {
        try {
            const client = await pool.connect();
            const results = await client.query(`INSERT INTO users (name, password) VALUES ('${user.name}', '${user.password}');`);
            client.release();
            return results;
        } catch (error) {
            console.error(error);
            return [error.severity + ': ' + error.routine];
        }
    },
    /*================================================*/
    /*================================================*/
    // QUERY: => updateUser
    updateUser: async function (value) {
        // try {
        //     const client = await pool.connect();
        //     const results = await client.query(`SELECT * FROM users WHERE id = ${value}`);
        //     client.release();
        //     return results;
        // } catch (error) {
        //     console.error(error);
        //     return [error.severity + ': ' + error.routine];
        // }
    },
    /*================================================*/
    /*================================================*/
    // QUERY: => deleteUser
    deleteUser: async function (value) {
        // try {
        //     const client = await pool.connect();
        //     const results = await client.query(`SELECT * FROM users WHERE id = ${value}`);
        //     client.release();
        //     return results;
        // } catch (error) {
        //     console.error(error);
        //     return [error.severity + ': ' + error.routine];
        // }
    },
    /*================================================*/
    /*================================================*/
    // QUERY: => getUsers
    getUsers: async function () {
        try {
            const client = await pool.connect();
            const results = await client.query(`SELECT * FROM users`);
            client.release();
            return results.rows;
        } catch (error) {
            console.error(error);
            return [error.severity + ': ' + error.routine];
        }
    },
    /*================================================*/
    /*================================================*/
    // QUERY: => getUsersByRoomID
    getUsersByRoomID: async function (value) {
        try {
            const client = await pool.connect();
            const results = await client.query(`SELECT * FROM users WHERE room_id = ${value}`);
            client.release();
            return results.rows;
        } catch (error) {
            console.error(error);
            return [error.severity + ': ' + error.routine];
        }
    },
    /*================================================*/
    /*================================================*/
};
module.exports = users;