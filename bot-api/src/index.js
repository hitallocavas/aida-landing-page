const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const token = '739756221:AAF2YDcDOqYnnst1gvr9uyOvOyvcQqMdPqM';
const User = require('./models/user');
const Cliente = require('./models/cliente');
const Prestador = require('./models/prestador');
const app = express();
const bot = new TelegramBot(token, {polling: true});
var tipoProfissional = "";
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
    bot.sendMessage(msg.chat.id,"Olá, "+ msg.from.first_name +" como vai? Eu sou a Aida e estou aqui para te ajudar na busca de um prestador de serviço. Que tipo de profissional você deseja?");

    bot.on('message', (msg) => {
        tipoProfissional = msg.text.toString();
            bot.on('message',(msg) => {
                console.log(tipoProfissional)
                    bot.sendMessage(msg.chat.id, "Ok, "+msg.from.first_name+". Para qual tipo de serviço?").then(()=>{
                      bot.on('message', (msg) => {
                        sim = true;
                        if (sim == true && (tipoProfissional.toLowerCase().includes("pedreiro")|| 
                            tipoProfissional.toLowerCase().includes("encanador")|| tipoProfissional.toLowerCase().
                                includes("marceneiro")||tipoProfissional.toLowerCase().includes("eletricista")|| 
                                tipoProfissional.toLowerCase().includes("gesseiro")|| tipoProfissional.toLowerCase().includes("carpinteiro")|| 
                                tipoProfissional.toLowerCase().includes("serviços gerais")|| tipoProfissional.toLowerCase().includes("pintor"))){
                                    bot.sendMessage(msg.chat.id,"Agora aguarde só mais uns segundos pois estamos coletando os melhores profissionais!");
                                        Prestador.find({profissional:tipoProfissional.toLowerCase()}).then(
                                            prestadores =>{
                                                bot.sendMessage(msg.chat.id, "Quase terminando...")
                                                    prestadores.forEach(function(prestador){
                                                        telefone = "" + prestador.telefone + "";
                                                        bot.sendMessage(msg.chat.id,"Nome: " + prestador.name + 
                                                        "\nTelefone: "+prestador.telefone);       
                                                    })
                                            }
                                        )
                                } 
                            })
                        })        
                    })
            })
    })