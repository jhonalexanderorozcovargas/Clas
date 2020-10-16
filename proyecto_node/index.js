/*/**
 * server forma 1
 */

/*
 var http = require('http');
 function onserver(request, response){
     console.log("peticion ok");

     response.writeHead( 200,{"conten-tipe": "text/html"} );

     response.write("<h1> server online hi</h1>");

     response.end();
 }

 var server = http.createServer(onserver);

 server.listen(3000);

 console.log("server working in http://localhost:3000/");*/
 /*/**
 * server forma 2
 contenido texto plano
 */
/*var http = require('http');

http.createServer( ( request, response) =>{
    response.writeHead( 200, { 'content-type' : 'text/plain'} )

    response.write("otro saludo");

    response.end();
}).listen(3000,'localhost');

control.log('server running in http://localhost:3000/ ');

*/
/*/**
 * server forma 3
 abrir un documento html
 */
 /*var http = require("http");

    fs =require( " fs");

    http.createServer( ( req,res) =>{
        fs.readFile(`./homer.html`, (err,html)=>{
            res.write(html);
            res.end();
        } );
    } ).listen(3000, 'localhost');
    console.log('server running in http://localhost:3000/ ');
*/
/*/**
 * server forma 4
 abrir diferentes rutas
 */

/*let http = require( "http" );

let fs = require( "fs" );
const { listenerCount } = require("process");
http.createServer( (req,res) => {

    res.writeHead( 200,{'content-type': 'text/html'} );

    switch (req.url) {
        case '/':
            plantilla = "home.html";
            
            break;
         case '/expres':
                plantilla = "sobre_expres.html";
                
                break;
        default:
            plantilla = "404.html";
            break;
    }

    fs.readFile( `./plantillas/` + `${plantila}`, (err, datos ) =>{
        res.write(datos);
        res.end();

    }).listen( 3000,'localhost' );

})
console.log("server ok");
*/

/*/**
 * server forma 5
 abrir constantes
 */
 
 const http = require("http");
 const hostname = '127.0.0.1';
 const port = 3000;

 const server = http.createServer( (req, res) =>{

    

    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    res.end('hola como vas?\n');
 } );

 server.listen(port, hostname, () =>{
    console.log(`server runat at http://${hostname}:${port}/`);


 });