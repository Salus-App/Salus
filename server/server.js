const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const apiRouter = require('./router/api.js')

app.use(express.json());

//handles static files
if (process.env.NODE_ENV === 'production'){
  app.use('/', express.static(path.join(__dirname, '../dist')));
  // app.get('/', (req, res) => {
  //   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  // });
};

//define route handlers
app.use('/api', apiRouter);

//local error handler
app.use((req, res) => {
    res.sendStatus(404);
})

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});