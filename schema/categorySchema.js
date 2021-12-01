const { mongoose } = require('../infra/db/mongoose/db');

const CategorySchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Category = mongoose.model('Categorias', CategorySchema);

module.exports = Category

