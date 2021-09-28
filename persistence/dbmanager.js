var mongoose = require("mongoose");
var dev_db_url = "mongodb+srv://wlazo:admin@cluster0.chrby.mongodb.net/WilliamLDB?retryWrites=true&w=majority";

var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB error de conexión : '));

var Product = require('./product');

// CREAR
exports.product_create = function(req, res){
    var product = new Product({
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
    });
    product.save(function(err){
        if(err){
            return next(err)
        }
        res.send({'message':'OK'});
    });
}
//LEER
exports.product_read = function(req, res){
    Product.findById(req.query.id, function(err, Product){
        if(err) return next(err);

        res.send(Product);
    });
}
//UPDATE
exports.product_update = function(req, res){
    Product.findByIdAndUpdate(req.query.id, {$set: req.body} ,function(err){
        if(err) return next(err);

        res.send({'message':'updated'});
    });
}
// DELETE
exports.product_delete = function(req, res){
    Product.findByIdAndRemove(req.query.id, function(err, Product){
        if(err) return next(err);

        res.send({'message':'deleted'});
    });
}