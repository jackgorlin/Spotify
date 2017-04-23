var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient

var db
var dbAddr = 'mongodb://jason:comp420@ds163340.mlab.com:63340/comp420_mongodb_demo'

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')

MongoClient.connect(dbAddr, (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(app.get('port'), function() {
        console.log('I am listening on port ' + app.get('port'));
    })
})

app.get('/', (req, res) => {
    var cursor = db.collection('quotes').find().toArray(function(err, result) {
            if (err) return console.log(err)

            res.render('index.ejs', {quotes: result})
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Successfully saved to database')
        res.redirect('/')
    })
})

app.put('/quotes', (req, res) => {
    db.collection('quotes').findOneAndUpdate(
        {name: 'Jason'},
        {  $set: {
                name: req.body.name,
                quote: req.body.quote
            }
        },{ sort: {_id: -1},
          upsert: true
        },
        (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        })
})

app.delete('/quotes', (req, res) => {
    db.collection('quotes').findOneAndDelete(
        {name: req.body.name},
        (err, result) => {
            if (err) return res.send(err)
            res.json("One of Duong's quote got deleted")
    })
})
