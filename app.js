var express = require('express');
var app = express();
const {Client}= require('pg');

// you can get user,password,and host(IP) from discord chat
const client= new Client({
    user: '',
    password: '',
    host: '',
    database: 'movies',
    port: 5432
});

app.get('/', function(req,res){
    client.connect();

    //variables needed for assignment queries, assigning temp values for now (not in use yet)
    var minrating=2;
    var maxrating=4;
    var movietitle='Pocahontas';
    var tag = '';


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