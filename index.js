var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
//var fs = require('fs');
var Podio = require('podio-js').api;

/*
var erver = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
			
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});
*/

var appId = '21157376';
var appToken = '01e9dd46cce84267bdd35d4fd3249935';

var podio = new Podio({
	authType: 'app',
	clientId: 'btvdc',
	clientSecret: 'C4YrRHaIEcaeACOVWqAs8k5ija6fx4NduaBb1fbA60PXUqUfw1jMt7Xav7JC9a3O'
});

app.get('/', function(req, res){
	podio.authenticateWithApp(appId, appToken, function(err) {
		if (err) throw new Error(err);
		podio.isAuthenticated().then(function () {
			
			console.log('Access Granted');
			
		}).catch(function(){
			if (podio.hasAuthError()) {
				console.log(podio.getAuthError());
			} else {
				// start authentication via link or redirect
				console.log(platform.getAuthorizationURL(redirectURL));
			}
		});
	});
	res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

/*
var server = http.createServer ( function(request,response){
			
    response.	writeHead(200,{"Content-Type":"text\plain"});
    if(request.method == "GET")
        {
            response.end("received GET request.")
        }
    else if(request.method == "POST")
        {
            response.end("received POST request.");
        }
    else
        {
            response.end("Undefined request .");
        }
});
*/