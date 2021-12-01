const mongoose = require('mongoose');

class MongooseDB {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            mongoose.Promise = global.Promise;
            await mongoose.connect('mongodb://localhost/loja');
            console.log('Connected sucessfully');
            return mongoose;
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = {
    MongooseDB: new MongooseDB(),
    mongoose
};