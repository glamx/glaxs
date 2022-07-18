const { Router } = require('express');
var express = require('express');
const { Socket } = require('net');
var app = express();

var path = require("path");
var router = express.Router()

var cors = require('cors')

app.get("/past/dinheiro.jpg.jpg", function(req, res){
    res.console.log("sim")
})
router.get("/", (req, res) => {
    res.sendFile(path.join( __dirname + "/past/home.html"))
}) // cria a rota de url

router.get("/contato.html", (req, res) => {
    res.sendFile(path.join( __dirname + "/past/contato.html"))
})



app.use(router) //falar pra aplicacao aplicar o route


app.listen(process.env.PORT || 3000, ()=>{
    console.log('seerv on')
    
})



