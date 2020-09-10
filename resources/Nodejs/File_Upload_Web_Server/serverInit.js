var https = require('https');
const parseUrl = require('parseurl');
var fs = require('fs');
var qs = require("querystring");
var formidable = require('formidable');

var Strongciphers = [
    'AES128-SHA',
    'AES256-SHA'
].join(':');


var Weakciphers = ['NULL-MD5',
    'NULL-SHA',
    'EXP-DES-CBC-SHA',
    'DES-CBC-SHA',
    'DES-CBC3-SHA'
].join(':');



var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
   ciphers: Weakciphers
   //ciphers: Strongciphers

};



const fileEngine = require('./fileErrHandler');
const UrlLoader = require('./urlController');

https.createServer(options, function(req, res) {
    try {

        console.log('request in', req.method, req.url);

        if (req.method === 'POST') {

            console.log('got POST request');


            var form = new formidable.IncomingForm();
            form.parse(req, function(err, fields, files) {
                if (!files.myfile) {
                    res.writeHead(500, {
                        'content-type': 'text/plain'
                    });
                    res.write('Not found desired file');
                    res.end();
                    return;
                }


                var oldpath = files.myfile.path;
                var newpath = '/home/shreyas/SiteNodeJS/Download/' + files.myfile.name;
                fs.rename(oldpath, newpath, function(err) {
                    if (err) throw err;
                    res.write('File uploaded Successfully');
                    res.end();
                });

            });
            return;
        }


        if (req.method === 'PUT') {
            try {
                var fileName = req.url.substring(1);
                var bytes = 0;
                console.log('__dirname: ', __dirname);
                var downloadDir = __dirname + '/Download/';
                //console.log('Got PUT request', + "|" + req.connection.remoteAddress + "|" + fileName + "|");
                fs.writeFileSync(downloadDir + fileName, "");
                req.on('data', function(data) {
                    bytes += data.length;
                    fs.appendFileSync(downloadDir + fileName, data);
                });
                req.on('end', function() {
                    console.log("File upload complete\nTransferred " + bytes + " bytes");
                    res.end("File upload complete");
                    // res.end();
                });
            } catch (e) {
                console.log(e);
                res.end("File upload error");
            }
            return;
        }
        // this is a library function
        var pathName = decodeURIComponent(req.url);

        var pathCheck = fileEngine(pathName); //return true or error message
        if (pathCheck) {

        } else {

        }


        var fileResEngine = new fileEngine(pathName);

        // create a literal validateFile to validate the path
        fileResEngine.pathCheck();
        if (fileResEngine.error === true) {
            res.statusCode = fileResEngine.statusCode;
            res.end(fileResEngine.ErrorMsg);

            return;
        } else {
            var UrlResLoader = new UrlLoader();
            UrlResLoader.requestUrl(fileResEngine, function(urctrl) {
                res.writeHead(urctrl.httpcode, urctrl.fileType);
                res.write(urctrl.data);
                res.end();
            });
        }

    } catch (err) {
        res.statusCode = err.status || 500;
        res.end(err.message);
    }

}).listen(443);
