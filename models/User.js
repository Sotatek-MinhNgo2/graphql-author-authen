const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
    roles: [String],
    active: Boolean
})

module.exports = mongoose.model('users', UserSchema);