const {Router} = require('express')

const router = Router();

router.get('/tasks', async (req, res) => {
    res.send('Hola')
})

router.get('/tasks/:id', (req, res) => {
    res.send('Hola')
})

router.post('/tasks', (req, res) => {
    res.send('Hola')
})

router.delete('/tasks', (req, res) => {
    res.send('Hola')
})

router.put('/tasks', (req, res) => {
    res.send('Hola')
})

module.exports = router