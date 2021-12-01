const { Router } = require('express');
const categorySchema = require('../schema/categorySchema');
const postSchema = require('../schema/postSchema');
const router = Router();

router.get('/postagens', async (req, res) => {
    const postagens = await postSchema.find();
    res.render('posts/postagens', {postagens: postagens.map(itens => {
        return itens.toJSON();
    })});
});

router.get('/postagens/add', async (req, res) => {
    const result  = await categorySchema.find();
    res.render('posts/addpostagem', {categorias: result.map(itens => {
        return itens.toJSON()
    })});
})

router.post('/postagens/nova', async (req, res) => {
    if(req.body.categoria === "0") {
        req.flash('error_msg', 'Categoria inválida: Registre uma categoria!');
        return res.redirect('/postagens');
    }
    try {
        const novaPostagem = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria,
            slug: req.body.slug
        }
        await postSchema.create(novaPostagem);
        
        req.flash('success_msg', 'Postagem Criada com sucesso!')
        res.redirect('/postagens');
    } catch(error) {
        req.flash('error_msg', 'Houve um erro durante o salvamento da postagem');
        res.redirect('/postagens')
    }
})

router.get('/postagens/delete/:id', async (req, res) => {
    const {_id} = req.params;
    await postSchema.deleteOne({id: _id});
    res.redirect('/postagens');
})

module.exports = router;