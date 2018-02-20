var fs = require('fs');

fs.appendFile('myNewFile1.txt', 'Hello Content!', function (err) {
    console.log('Saved!');
});

// The "fs.appendFile()" method appends specified content to a file. If the file does not exist, 
// the file will be created: