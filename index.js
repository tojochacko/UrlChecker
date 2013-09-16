var request = require('request');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    var urlArr = chunk.split('\n');

    //remove the last element since its an empty string
    urlArr.pop();
    chkUrl(urlArr); 
});

process.stdin.on('end', function() {
    console.log('Process finished');
});

var chkUrl = function(arr) {
    var urlToChk;
    for(var i=0; i<arr.length;i++) {
        urlToChk = arr[i];
        requestURL(urlToChk);
    }
}

var requestURL = function(url) {
    request(url, function (error, response, body) {
        if(error || response.statusCode != 200) {
            console.log('Rougue URL: '+url);
            console.log(JSON.stringify(error));
        }
    });
}
