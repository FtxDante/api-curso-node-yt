const { mongoose } = require('../infra/db/mongoose/db');

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: String,
        require: true
    },
    pais: {
        type: String
    }
});
const User = mongoose.model('users', UserSchema);

module.exports = User;