const product = require('./controllers/product.controller')

module.exports = (route) => {
    route.get('/users')

    route.get('/products', (req, res) => product.index(res))
    route.get('/products/:product', (req, res) => product.read(req, res))
    route.post('/products', (req, res) => product.create(req, res))
    route.put('/products/:product', (req, res) => product.update(req, res))
    route.delete('/products/:product', (req, res) => product.destroy(req, res))
}
