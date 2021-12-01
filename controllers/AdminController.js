const { adminService } = require('../service');
class AdminController {
    static async findAll(req, res) {
        try {
            const result = await adminService.findAllService();
            res.render('admin/categorias', {categorias: result.map(itens => {
                return itens.toJSON()
            })});
        } catch(error) {
            req.flash('error_msg', 'Houve um erro ao listar categorias');
            res.redirect('/admin');
        }
    }

    static async createCategory(req, res) {
        try {
            await adminService.createCategory(req);
            req.flash('success_msg', 'Categoria Criada com Sucesso')
            res.redirect('/categorias');
        } catch(error) {
            console.error(error);
            req.flash('error_msg', 'Houve um erro ao salvar a categoria, tente novamente!')
            res.redirect('/categorias')
        }
    }

    static async deleteCategory(req, res) {
        try {
            await adminService.deleteCategory(req);
            req.flash('error_msg', ' Apagado com sucesso');
            res.redirect('/categorias');
        } catch(error) {
            req.flash('error_msg', ' Erro ao deletar');
            res.redirect('/categorias');
        }
    }

    static async updateCategory(req, res) {
        try {
            await adminService.updateCategory(req);
            req.flash('success_msg', 'Categoria atualizada')
            res.redirect('/categorias')
        } catch(error) {
            req.flash('error_msg', 'Falha ao atualizar')
            res.redirect('/categorias')
        }
    }

    static async findOneCategory(req, res) {
        try {
            const categoria = await adminService.findOneCategory(req);
            res.render('admin/editcategorias', categoria);
        } catch (error) {
            req.flash('error_msg', 'Está categoria não existe');
            res.render('admin/categorias');
        }
    }
}

module.exports = AdminController;