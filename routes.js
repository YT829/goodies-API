const product = require('./controllers/product.controller')
const user = require('./controllers/user.controller')
const { changeUser } = require('./db')

module.exports = (route) => {
    route.get('/user', (req, res) => user.index(res))
    route.post('/user', (req, res) => user.create(req, res))

    route.get('/products', (req, res) => product.index(res))
    route.get('/products/:product', (req, res) => product.read(req, res))
    route.post('/products', (req, res) => product.create(req, res))
    route.put('/products/:product', (req, res) => product.update(req, res))
    route.delete('/products/:product', (req, res) => product.destroy(req, res))
}
