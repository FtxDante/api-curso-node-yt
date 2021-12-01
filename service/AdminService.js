const { AdminRepository } = require("../repository");

class AdminService {
    async findAllService() {
        const allCategories = await AdminRepository.findAll();
        return allCategories;
    }

    async createCategory(req) {
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug.toLowerCase().replace(/ /g, '-')
        }
        await AdminRepository.create(novaCategoria);
    }

    async deleteCategory(req) {
        const { id } = req.params;
        await AdminRepository.deleteOne({ _id: id });
    }

    async updateCategory(req) {
        const {nome, slug, id} = req.body;
        await AdminRepository.updateOne({_id: id}, {nome: nome, slug: slug.toLowerCase().replace(/ /g, '-')});
    }

    async findOneCategory(req) {
        const { id } = req.params;
        const categoria = await AdminRepository.findOne({_id: id});
        return categoria
    }
}

module.exports = new AdminService();