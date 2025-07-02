const express = require('express')
const NotFoundError = require('./middleware/404Handling')
const ApiError = require('./utils/apierror');
const ValidationMiddleware = require('./middleware/ValidationMiddleware');
const app = express()


app.use(express.json({}));

app.use("/api/v1",require("./router"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("",(req,res,next)=>{
    next( new ApiError("Not Found"))
})

app.use(NotFoundError)
app.use(ValidationMiddleware)


module.exports = app;
