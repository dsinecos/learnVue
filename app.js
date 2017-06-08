var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.listen(2347);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'null');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    var data = {
        name: "John",
        lastname: "Doe",
        profession: "Hunter"
    };

    //res.json(data);
    //res.write("Hurray");
    res.write("Hoye Hoye Hoye");
    res.write(JSON.stringify(data, null, "     ")) ;
    res.end();
});

app.post('/login', function(req, res) {
    var check = {
        username: "Bruce",
        password: "Wayne"
    };
    console.log(req.body.username);
    console.log(req.body.password);

    if(req.body.password === "Wayne" && req.body.username === "Bruce") {
        //res.write("You have logged in");
        //res.end();
        res.redirect('/testLogin');
    } else {
        res.write("You couldn't login");
        res.end();
    }


})

app.get('/testLogin', function(req, res) {
    res.write("This is a response from /testLogin");
    res.write("\n");
    res.write("Congratulations you've logged in");
    res.end();
})
