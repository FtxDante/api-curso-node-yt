const { Router } = require('express');
const { AdminController } = require('../controllers');
const { errorsValidation } = require('../validations/admin');
const router = Router();

router.get('/categorias', AdminController.findAll);

router.post('/categorias/nova', errorsValidation, AdminController.createCategory);

router.get('/categorias/add', (req, res) => { res.render('admin/addcategorias');})

router.get('/categorias/delete/:id', AdminController.deleteCategory)

router.post('/categorias/edit', errorsValidation , AdminController.updateCategory);

router.get('/categorias/edit/:id', AdminController.findOneCategory)

module.exports = router;