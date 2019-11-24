const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = async (req, res, next) => {
    Product.fetchAll(products => {
        const prods = products;
        res.render('shop', {prods: prods, docTitle: 'Shops', path: '/'})
    });
};
