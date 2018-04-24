var express = require('express');
var app = express();
const {Client}= require('pg');

const client= new Client({
    user: 'cse412',
  host: '45.55.18.197',
  database: 'movies',
  password: 'database1',
  port: 5432
});

app.get('/', function(req,res){
    //console.log("connecting..");
    client.connect();
    //console.log("connected");

    client.query('SELECT * FROM genres', (err,resp)=>{
        if(err){
            //console.log("Error: "+err);
        }else{
            //console.log(resp.rows);
            res.send(resp.rows);
        }
        client.end();
    });
});

app.listen(3060, 'localhost');
console.log("Now listening on port 3000");