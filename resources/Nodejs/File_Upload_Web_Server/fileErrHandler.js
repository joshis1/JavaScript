var resolvePath = require('resolve-path');
const path = require('path');
var PagesDir = path.join(__dirname, './Pages');
var HomeDir = path.join(__dirname, './');

function pathCheckerEngine(path)
{
    this.error = true;
    this.path = path;
    this.statusCode = 500;
    this.ErrorMsg = "Internal Server Error";
    this.PageRequest = "home.html";
    this.extname = "html";
    this.fullpath = './';
    var pcEngine = this;
    this.pathCheck = function()
    {

       try {
           if (!path) {
               pcEngine.statusCode = 400;
               pcEngine.ErrorMsg = 'path required';
               pcEngine.error = true;
           }

           else {

               //removes first '/' of the path
               pcEngine.PageRequest = path.substr(1);
               pcEngine.extname =  pcEngine.PageRequest.slice((pcEngine.PageRequest.lastIndexOf(".") - 1 >>> 0) + 2);
               console.log( pcEngine.extname);

               // if it is page request
               if(pcEngine.extname  === 'html') {
                   pcEngine.fullpath = resolvePath(PagesDir, pcEngine.PageRequest);
               }

               // if it is image request
               else if( pcEngine.extname  !== '' && pcEngine.extname  !== 'html' )
               {
                   pcEngine.fullpath = resolvePath(HomeDir, pcEngine.PageRequest);
               }

               // no type define -- route to home.
               else
               {
                   if(pcEngine.PageRequest === '')
                   {
                       pcEngine.PageRequest = 'home.html';
                       pcEngine.fullpath = resolvePath(PagesDir, pcEngine.PageRequest);
                   }
                   else
                   {
                   pcEngine.fullpath = resolvePath(PagesDir, pcEngine.PageRequest + '.html');
                   }
               }

               pcEngine.statusCode = 200;
               pcEngine.ErrorMsg = null;
               pcEngine.error = false;
           }
       }
       catch(err)
       {
           pcEngine.statusCode = err.status || 500;
           pcEngine.ErrorMsg = 'Malicious Page Request';
           pcEngine.error = true;
       }
    }
}

/*
var Cat = function (name) {
    this.name = name;
    var name;
    return {
        pat : function () {
            name
        }
    }
};
Cat.prototype.pat = function () {
    this.name = this.name + 'prrr';

}
Cat.prototype.getName = function () {
    return name;
}

var myCat = new Cat('fred');
myCat.pat()
Cat();

*/
module.exports = pathCheckerEngine;