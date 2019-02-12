const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const token = '739756221:AAF2YDcDOqYnnst1gvr9uyOvOyvcQqMdPqM';
const User = require('./models/user');
const Cliente = require('./models/cliente');
const Prestador = require('./models/prestador');
const app = express();
const bot = new TelegramBot(token, {polling: true});
var messageAnterior = "";
var sim = false;
    

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

bot.on('message', (msg) => {
    
    bot.onText(/\/start/, (msg) => {

        bot.sendMessage(msg.chat.id,"Olá, "+ msg.from.first_name +" como vai? Eu sou a Aida e estou aqui para te ajudar na busca de um prestador de serviço. Que tipo de profissional você deseja?").then(data => {
            this.messageAnterior = "inicio";
        });
            
    });
    
    
    if (msg.text.toString().toLowerCase().includes("pedreiro")|| 
        msg.text.toString().toLowerCase().includes("encanador")|| msg.text.toString().toLowerCase().
        includes("marceneiro")||msg.text.toString().toLowerCase().includes("eletricista")|| 
        msg.text.toString().toLowerCase().includes("gesseiro")|| msg.text.toString().toLowerCase().includes("carpinteiro")|| 
            msg.text.toString().toLowerCase().includes("serviços gerais")|| msg.text.toString().toLowerCase().includes("pintor")){
                Prestador.find({profissional:msg.text.toString().toLowerCase()}).then(
                    prestadores =>{
                        bot.sendMessage(msg.chat.id, "Quase terminando...")
                            prestadores.forEach(function(prestador){
                                telefone = "" + prestador.telefone + "";
                                bot.sendMessage(msg.chat.id,"Nome: " + prestador.name + 
                                "\nTelefone: "+prestador.telefone);       
                            })
                            this.messageAnterior = "contato"
                    }
                )
        } 
})

