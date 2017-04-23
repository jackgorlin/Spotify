var express = require('express')
var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

MongoClient.connect('your_link_too_your_database' (err, database) => {

})

app.listen(3000, function() {
	console.log("I am listening on port 3000")
})

app.get('/', function(request, res) {
	res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', function(request, res) {
	console.log(req.body)
})