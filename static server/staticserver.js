const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 5000;

http.createServer((req, res) => {
    console.log('request',req.url);

    let filepath = req.url
    if(filepath === '/'){
        filepath = 'public/index.html'
    }
    else{
        filepath = 'public'+req.url
    }

    let extname = String(path.extname(filepath)).toLowerCase();
    const mime = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript",
            ".json": "application/json",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".gif": "image/gif",
            ".svg": "image/svg+xml",
            ".ico": "image/x-icon",
          }
          
        let contentType = mime[extname] || 'application/octet-stream';

    fs.readFile(filepath, (err, data) => {
        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile('public/404.html', (err, data) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data, 'utf8');
                });
            }
            else{
                res.writeHead(500)
                res.end('server error', err.code)
            }
        }
        else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data, 'utf8');
        }
        
    })
}).listen(PORT, (err) => {
    if(err){
        console.log("error occured",err)
    }
    else{
        console.log(`server is running on http://localhost:${PORT}`)
    }
})









