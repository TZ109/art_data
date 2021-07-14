const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require("cors");

app.use(cors());
app.use('/api', api);



app.get('/', (req, res) => {

    res.send({test:'Server Response Sucess'});

});

const port = 3002;
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})