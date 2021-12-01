class Repository {
    constructor(schema){
        this.schema = schema;
    }
    async findAll(sort = {date: 'DESC'}) {
        const result = await this.schema.find().sort(sort);
        return result;
    }

    async create(data) {
        await this.schema.create(data);
    }

    async deleteOne(id) {
        await this.schema.deleteOne(id);
    }

    async updateOne(where, data) {
        await this.schema.updateOne(where, data);
    }

    async findOne(where) {
        const result = await this.schema.findOne(where);
        return result;
    }
}

module.exports = Repository;