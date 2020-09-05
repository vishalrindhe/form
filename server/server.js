const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

/**instance of express */
const app = express();

/**to handle json data */
app.use(bodyParser.json());

app.use(cors());

/** to test get request */
app.get('/', function(req, res) {
    res.send('Hello from Server');
})

app.post('/enroll', function(req, res){
    console.log(req.body);
    res.status(440).send({"message": "Data received"});
})

app.listen(PORT, function(){
    console.log("server running on port localhost " + PORT);
});