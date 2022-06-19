const conn = require("../db");

async function read(req, res) {
  conn.query(
    `SELECT * FROM product WHERE id = ${req.params.product}`,
    function (err, result) {
      if (err) throw err;
      res.status(200).json(result).end();
    }
  );
}

/**
 * Get all products from DB
 * @param {} res
 */
async function index(res) {
  conn.query(`SELECT * FROM product`, function (err, result) {
    if (err) throw err;
    res.status(200).json(result).end();
  });
}

/**
 * Post 1 product into DB
 * @param {*} req
 * @param {*} res
 */
async function create(req, res) {
  const product = req.body,
    data = [];

  // Get array of product values
  for (const key of Object.keys(product)) {
    data.push(product[`${key}`]);
  }

  conn.query(
    `INSERT INTO \`ntutsystemAWS\`.\`product\`(\`id\`, \`product_name\`, \`product_price\`,\`retailler_price\`,\`description\`,\`quantity\`,\`status\`,\`product_image\`) VALUES(?)`,
    [data],
    function (err, result) {
      if (err) throw err;
      result.data = product;
      res.status(201).json(result).end();
    }
  );
}

async function update() { }

/**
 * Update 1 product in DB
 * @param {*} req
 * @param {*} res
 */
async function update(req, res) {
  conn.query(
    `UPDATE \`ntutsystemAWS\`.\`product\` SET ? WHERE \`id\`=${req.params.product}`,
    [req.body],
    function (err, result) {
      if (err) throw err;
      result.data = req.body;
      res.status(201).json(result).end();
    }
  );
}

/**
 * Delete 1 product from DB
 * @param {*} req
 * @param {*} res
 */
async function destroy(req, res) {
  conn.query(
    `DELETE FROM \`ntutsystemAWS\`.\`product\` WHERE \`id\`=${req.params.product}`,
    function (err, result) {
      if (err) throw err;
      res.status(202).json(result).end();
    }
  );
}

module.exports = {
  read,
  index,
  create,
  update,
  destroy,
};
