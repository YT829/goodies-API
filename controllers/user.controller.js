const conn = require('../db');

async function index(res) {
    conn.query(`SELECT * FROM user`, function (err, result) {
        if (err) throw err;
        res.status(200).json(result).end();
    });
}

async function create(req, res) {
    const product = req.body,
        data = [];

    // Get array of product values
    for (const key of Object.keys(product)) {
        data.push(product[`${key}`]);
    }

    conn.query(`INSERT INTO \`ntutsystemAWS\`.\`user\`(\`id\`, \`name\`, \`username\`,\`password\`,\`user_status\`,\`phone_number\`,\`email\`,\`created_at\`, \`updated_at\`,\`email_verified_at\`) VALUES(?)`,
        [data],
        function (err, result) {
            if (err) throw err;
            result.data = product;
            res.status(201).json(result).end();
        }
    );
}

module.exports = {
    index,
    create
}