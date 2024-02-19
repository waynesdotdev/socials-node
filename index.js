const express = require('express')
const format = require('date-format')

const app = express()

app.get('/', (req, res, next) => {
    res.status(200).send(`
        <a href="/api/v1/instragram">Instagram</a>
        <a href="/api/v1/facebook">Facebook</a>
        <a href="/api/v1/linkedin">Linkedin</a>
    `)
})

app.get('/api/v1/instagram', (req, res, next) => {
    const instaSocial = {
        username: 'Waynes',
        followers: 66,
        follows: 70,
        date: format.asString("dd[MM] = hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial)
})
app.get('/api/v1/facebook', (req, res, next) => {
    const facebookSocial = {
        username: 'Waynes',
        followers: 66,
        follows: 70,
        date: format.asString("dd[MM] = hh:mm:ss", new Date())
    }
    res.status(200).json(facebookSocial)
})
app.get('/api/v1/linkedin', (req, res, next) => {
    const linkedinSocial = {
        username: 'Waynes',
        followers: 66,
        follows: 70,
        date: format.asString("dd[MM] = hh:mm:ss", new Date())
    }
    res.status(200).json(linkedinSocial)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})