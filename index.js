var request = require('request');
var htmlparser = require("htmlparser2");
var data = '';

var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "a"){
            if(beginswithHttp(attribs.href)) {
                //console.log(attribs.href);
                requesturl(attribs.href); 
            }
        }
    },
});

function requesturl(url) {
    request(url, function (error, response, body) {
        if(error || response.statusCode != 200) {
            console.log('Rougue Url: '+url);
            console.log(JSON.stringify(error));
        }
    });
}

function beginswithHttp(url) {
    var regex = new RegExp("/((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/");

    return regex.test(url);
} 

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    data += chunk;
});

process.stdin.on('end', function() {
    parser.write(data);
    parser.end();
});
