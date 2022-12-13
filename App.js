
const express = require("express");
const dao = require('./database/dao')
const cors = require("cors")


const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
}));

const userRouter = require('./routes/User');
app.use('/user', userRouter);

const phoneRouter = require('./routes/Phone');
app.use('/phone',phoneRouter);

app.listen(4500 , ()=>{
    console.log("rodando");
});
    