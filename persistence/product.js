var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    code: {type:String, required:true},
    name: {type:String, required:true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
});

module.exports = mongoose.model('Product', ProductSchema);