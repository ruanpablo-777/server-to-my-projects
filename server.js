import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

app.use('/', express.static('public/my-web-site'))
app.use('/jogodavelha', express.static('public/jogoDaVelha/jogodavelha'))

app.listen(port, () => {
    console.log('working...')
})