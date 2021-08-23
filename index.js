import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

// mongoose connection
const connStr = `mongodb+srv://CRM-admin:Password01@cluster0.9w5vc.mongodb.net/CRM-backend?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(connStr, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err) {
    console.log('Error occured while connecting to Database')
  } else {
    console.log('Database connected successfully')
  }
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// cors setup
app.use(cors())

routes(app)

app.get("/", (req, res) => {
  res.send(`Node & Express server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
