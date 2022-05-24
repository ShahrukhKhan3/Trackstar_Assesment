const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser=require('body-parser')
app.use(express.json());
const routes=require('./controller/Routes');
app.use(cors());

const connectdb = require("./db");
app.use(bodyParser.json());

app.use('/routes',routes);
connectdb();
app.listen(4000, () => {
  console.log(`Example  listening at http://localhost`);
});