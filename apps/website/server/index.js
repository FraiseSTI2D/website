const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const { createRequestHandler } = require('@remix-run/express')

const app = express()

app.disable('x-powered-by')
app.use(compression())
app.use(morgan('tiny'))
app.use(
  '/build',
  express.static('public/build', { immutable: true, maxAge: '1y' })
)
app.use(express.static('public/build', { maxAge: '1h' }))

app.get('/auth', (req, res) => res.redirect('/auth/login'))

app.all(
  '*',
  createRequestHandler({
    build: require('./build'),
    mode: process.env.NODE_ENV,
  })
)

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`)
})
