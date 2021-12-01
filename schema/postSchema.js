const { Schema } = require('mongoose');
const { mongoose } = require('../infra/db/mongoose/db');

const Postagem = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    descricao: {
        type:  String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    }, 
    categoria: {
        type: Schema.Types.ObjectId,
        ref: "Categorias",
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

const Posts = mongoose.model('postagens', Postagem);

module.exports = Posts;