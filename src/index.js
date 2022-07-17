const { Router } = require('express');
var express = require('express');
const { Socket } = require('net');
var app = express();

var path = require("path");
var router = express.Router()




router.get("/", (req, res) => {
    res.sendFile(path.join( __dirname + "/past/home.html"))
}) // cria a rota de url

router.get("/contato", (req, res) => {
    res.sendFile(path.join( __dirname + "/past/contato.html"))
})



app.use(router) //falar pra aplicacao aplicar o route


app.listen(process.env.PORT || 3000, ()=>{
    console.log('seerv on')
    
})





async function getExternalImage(){
    var response = await fetch ('https://images.unsplash.com/photo-1657483577058-e51f452120ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODA4Mjk4Nw&ixlib=rb-1.2.1&q=80&w=1080') 

    var c = document.querySelector('.image')

    innerHTML = `<img src="${response.url}" >`
}



getExternalImage()