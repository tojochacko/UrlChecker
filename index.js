var request = require('request');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    console.log(chunk); 
    var urlArr = chunk.split('\n');
    console.log(urlArr);

    //remove the last element of the array
    chkUrl(urlArr); 
});

process.stdin.on('end', function() {
    process.stdout.write('Process finished');
});

var chkUrl = function(arr) {

    for(var i=0; i<arr.length;i++) {
        console.log(arr[i]);
    }
}
