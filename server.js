const express = require("express");
const bodyParser = require('body-parser');
let mySqlDbRoutes = require('./routes/mySqlDbRoutes');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

// test the local browser with the below route
router.get('/', function(req, res) {
    res.json({ message: 'This sees to be working sir' });
});
router.get('/getAllRecords',mySqlDbRoutes.getAllRecords);
app.use('/dashboard-api', router);
app.listen(5000);