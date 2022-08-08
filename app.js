const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'ONG api',
      version: '1.3.0',
      description: 'Api de la aceleración de Alkemy',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./routes/*.js',
    './controllers/*.js',
    './docs/*.js'],
}

const specs = swaggerJsDoc(options)
require('dotenv').config()

const indexRouter = require('./routes/index')
const activitiesRouter = require('./routes/activities')
const authRouter = require('./routes/auth')
const backofficeRouter = require('./routes/backoffice')
const categoriesRouter = require('./routes/categories')
const commentsRouter = require('./routes/comments')
const contactsRouter = require('./routes/contacts')
const membersRouter = require('./routes/members')
const newsRouter = require('./routes/news')
const organizationsRouter = require('./routes/organizations')
const slidesRouter = require('./routes/slides')
const testimonialsRouter = require('./routes/testimonials')
const usersRouter = require('./routes/users')

const port = process.env.PORT || 3001

const app = express()
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())
// middlewaress, le paso la ruta para poder consumir la API
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/', indexRouter)
app.use('/activities', activitiesRouter)
app.use('/auth', authRouter)
app.use('/backoffice', backofficeRouter)
app.use('/categories', categoriesRouter)
app.use('/comments', commentsRouter)
app.use('/contacts', contactsRouter)
app.use('/members', membersRouter)
app.use('/news', newsRouter)
app.use('/organization', organizationsRouter)
app.use('/slides', slidesRouter)
app.use('/testimonials', testimonialsRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor funcionando en el puerto ${port}`)
})

module.exports = app
