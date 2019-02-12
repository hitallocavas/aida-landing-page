const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const PrestadorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    idade: {
        type: Number,
        require: false,
    },
    email:{
        type: String,
        required: false,
    },
    endereco: {
        type: String,
        require: false,
    },
    profissional: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    avaliacaoArquiteto:{
        type: Object,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
    portfolio:{
        type: Array,
        required: false,
    },
    avPrazo: {
        type: Number,
        require: false,
    },
    avAtendimento: {
        type: Number,
        require: false,
    },avOrcamento: {
        type: Number,
        require: false,
    },
    avaliacaoGeral: {
        type: Number,
        require: false,
    },
    comentariosClientes: {
        type: String,
        require: false,
    },
    valorMedio: {
        type: Number,
        require: false,
    },
    tipoServico:{
        type: String,
        require:true
    },
    emailUsuario: {
        type:String,
        required: false,
    },
    UrlPerfil:{
        type:String,
        required:false,
    }

});



// UserSchema.pre('save', async function (next) {

// const hash = await bcrypt.hash(this.password, 10);
// this.password = hash;
// next();
// })

const Prestador = mongoose.model('Prestador', PrestadorSchema);

module.exports = Prestador;