var request = require('request');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    var urlArr = chunk.split('\n');

    //@TODO: remove the last element of the array
    chkUrl(urlArr); 
});

process.stdin.on('end', function() {
    process.stdout.write('Process finished');
});

var chkUrl = function(arr) {
    var urlToChk;
    for(var i=0; i<arr.length;i++) {
        urlToChk = arr[i];
        request(urlToChk, function (error, response, body) {
            if(error || response.statusCode != 200) {
                process.stdout.write('Rouge URL: '+urlToChk);
            }
        });
    }
}
