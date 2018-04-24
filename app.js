var express = require('express');
var app = express();
const {Client}= require('pg');

const client= new Client({
    user: '',
    password: '',
    host: '',
    database: 'movies',
    port: 5432
});

app.get('/', function(req,res){
    client.connect();

    //test connection to database and make sure we can query data. just testing genres database for now
    client.query('SELECT * FROM genres', (err,resp)=>{
        if(err){
            console.log("Error: "+err);
            res.send(err);
        }else{
            console.log(resp.rows);
            res.send(resp.rows);
        }
        client.end();
    });
});

app.listen(3060, 'localhost');
console.log("Now listening on port 3060");