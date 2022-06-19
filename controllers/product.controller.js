const conn = require('../db')


async function read(req, res) {
    conn.query(`SELECT * FROM products WHERE id = ${req.params.product}`,
        function (err, result) {
            if (err) throw err;
            res.status(200).json(result).end()
        })
}

async function index(res) {
    conn.query(`SELECT * FROM products`, function (err, result) {
        if (err) throw err;
        res.status(200).json(result).end()
    });
}

async function create(req, res) {
    const product = req.body,
        data = []

    // Get array of product values
    for (const key of Object.keys(product)) {
        data.push(product[`${key}`])
    }

    conn.query(`INSERT INTO \`goodies\`.\`products\`(\`name\`, \`stock\` ,\`price\`, \`image\`) VALUES(?)`, [data],
        function (err, result) {
            if (err) throw err;
            result.data = product
            res.status(201).json(result).end()
        })
}


async function update() {

}

async function destroy() {

}

module.exports = {
    read,
    index,
    create,
    update,
    destroy
}
