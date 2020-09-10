const fileEngine = require('./fileErrHandler');

const fs = require('fs');
const mime = require('mime');
const path = require('path');

function UrlController(res) {
    this.httpcode = null;
    this.fileType = {};
    this.data = null;
    this.res = res;
    this.cb = null;
    var urctrl = this;
    this.requestUrl = function (fileResEngine, callback) {

        this.cb = callback;

        switch (fileResEngine.extname) {

            case 'html':
            case "":
                fs.readFile(fileResEngine.fullpath, function (err, data) {
                    if (err)
                    {
                        console.log(err);
                        urctrl.httpcode = 404;
                        urctrl.data = "Page not found";
                        return;
                    }

                    urctrl.httpcode = 200;
                    urctrl.fileType = {'Content-Type': 'text/html'};
                    urctrl.data = data;
                    urctrl.cb(urctrl);
                });

                break;


            default:

                try {
                    fs.readFile(fileResEngine.fullpath, function (err, data) {
                        if (err) {
                            console.log(err);
                            urctrl.httpcode = 404;
                            urctrl.fileType = {'Content-Type': 'text/html'};
                            urctrl.data = "File not found";
                            urctrl.cb(urctrl);

                        }
                        else {
                            urctrl.httpcode = 200;
                            urctrl.fileType = mime.lookup(mime.lookup('./' + fileResEngine.fullpath));
                            urctrl.data = data;
                            urctrl.cb(urctrl);
                        }

                    });
                }
                catch(err)
                {
                    urctrl.httpcode = 403;
                    urctrl.fileType = {'Content-Type': 'text/html'};
                    urctrl.data = "Forbidden";
                    urctrl.cb(urctrl);
                }

                break;

        }
    }

}

module.exports = UrlController;