const express = require('express');

const server = express();

server.get('/',(req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1> hola mundo con express y node </h1>");
    res.end();
})

server.listen(3000,()=>{
    console.log("servidor enel puerto 3000");
})