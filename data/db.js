const Book = require('../models/Book');
const User = require('../models/User');

const mongoDataMethods = {
    getAllBooks: async () => {
        return await Book.find()
    },
    getUserById: async (id) => {
        return await User.findById(id);
    }
}

module.exports = mongoDataMethods;