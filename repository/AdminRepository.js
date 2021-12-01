const CategorySchema = require('../schema/categorySchema');
const Repository = require('./Repository');
class AdminRepository extends Repository {
    constructor() {
        super(CategorySchema);
    }
}

module.exports = new AdminRepository();