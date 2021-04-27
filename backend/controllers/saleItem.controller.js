const SaleItems = require("../models/saleItem.model");

module.exports.findAllSaleItems = (req, res) => {
    SaleItems.find()
        .then(allSaleItems => res.json({SaleItems: allSaleItems}))
        .catch(err => res.json({message: "Something went wrong grabbing all the sales items", error: err}))
}

module.exports.findOneSaleItem = (req, res) => {
    SaleItems.findOne({_id: req.params._id})
        .then(oneSaleItem => res.json({SaleItems: oneSaleItem}))
        .catch(err => res.json({message: "Something went wrong grabbing the sale item!", error: err}))
}

module.exports.createOneSaleItem = (req, res) => {
    SaleItems.create(req.body)
        .then(addSaleItem => res.json({SaleItems: addSaleItem}))
        .catch(err => res.json({message: "Something went wrong creating the sale item!", error: err}))
}

module.exports.updateOneSaleItem = (req, res) => {
    SaleItems.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneSaleItem => res.json({SaleItems: oneSaleItem}))
        .catch(err => res.json({message: "Something went wrong updating the sale item!", error: err}))
}

module.exports.deleteOneSaleItem = (req, res) => {
    SaleItems.deleteOne({_id: req.params._id})
        .then(res.json({message: "Sale item deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the sale item!", error: err}))
}