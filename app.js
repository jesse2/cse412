var express = require('express');
var app = express();
const {Client}= require('pg');

const client= new Client({
    user: '',
  host: '',
  database: '',
  password: '',
  port: 5432
});

app.get('/', function(req,res){
    client.connect();
    client.query('select * from deleteme', (err,resp)=>{
        if(err){
            console.log("Error: "+err);
        }else{
            console.log(resp.rows);
            res.send(resp.rows);
        }
        client.end();
    });
});

app.listen(3000, 'localhost');
console.log("Now listening on port 3000");