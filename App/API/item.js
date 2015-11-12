var mongoose     = require('mongoose');

var ItemSchema   = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Item', ItemSchema);