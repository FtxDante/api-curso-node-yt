module.exports = (req, res, next) => {
    var erros = [];
    const {nome, slug} = req.body;
    
    if(!nome) {
        erros.push({text: 'Nome inválido'});
    }

    if(!slug) {
        erros.push({text: 'Slug inválido'})
    }

    if(nome.length <= 2) {
        erros.push({text: 'Nome deve ter mais que 2 caracteres'})
    }

    if(erros.length > 0) {
        res.render('admin/addcategorias', {erros});
    }else {
        next()
    }
}