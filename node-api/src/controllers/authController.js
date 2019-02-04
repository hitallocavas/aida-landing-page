const express = require('express');

const User = require('./../models/user');
const Cliente = require('./../models/cliente');

const router = express.Router();

    // USUARIO DEMONSTRAÇÃO

    router.post("/register", async (req,res) => {
        try {
            const {email} = req.body;
                if(await User.findOne({email})){
                    res.status(400).send({error:'E-mail Já cadastrado'});
                }

            const user = await User.create(req.body);
            
            // user.password = undefined;

            return res.send(user);
        } 
        catch (err) {
            return res.status(400).send({err:'Registration Error'});   
        }
    });

    //Get users
    router.get('/users', function(req, res) {
       var users = {};
       users = User.find().then(users => {
           res.send(users);
       })
    });

    //Delete user
    router.delete("/user", function(req,res){
        console.log(req);
        user = User.findOneAndDelete(req.params.email, function(err){
            if(err) return next(err);
            res.send('Deletado com sucesso');
        })
    });
    //FIM DEMONSTRAÇÃO USUARIO

    // SERVIÇOS RELATIVOS AO CLIENTE
    
    router.post("/cadastroCliente", async (req,res) => {
        try {
            const {email} = req.body;
                if(await Cliente.findOne({email})){
                    res.status(400).send({error:'E-mail Já cadastrado'});
                }

            const cliente = await Cliente.create(req.body);
            return res.send(cliente);
            
        } 
        catch (err) {
            return res.status(400).send({err:'Registration Error'});   
        }
    });

module.exports = app => app.use('/auth', router);