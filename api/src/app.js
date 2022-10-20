const express = require('express');
const {router} = require('./routes/index')
const morgan = require('morgan')
const { logError, boomErrorHandler, errorHandler } = require('./middlewares/error.handler');
const app = express();

app.use(morgan('dev'))
app.use(express.json());
router(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = {app}