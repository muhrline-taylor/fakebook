const SaleItemsController = require("../controllers/saleItem.controller");
const SaleItems = require("../models/saleItem.model");

module.exports = app => {
    // GET ALL
    app.get("/api/saleItems", SaleItemsController.findAllSaleItems)
    // GET ONE BY ID
    app.get("/api/saleItems/:_id", SaleItemsController.findOneSaleItem)
    // CREATE
    app.post("/api/saleItems/new", SaleItemsController.createOneSaleItem)
    // UPDATE
    app.put("/api/saleItems/update/:_id", SaleItemsController.updateOneSaleItem)
    // DELETE
    app.delete("/api/saleItems/delete/:_id", SaleItemsController.deleteOneSaleItem)
}