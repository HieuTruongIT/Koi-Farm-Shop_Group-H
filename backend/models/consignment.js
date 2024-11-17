const mongoose = require('mongoose');

const consignmentSchema = new mongoose.Schema({
    koiName: String,
    koiType: String,
    koiAge: Number,
    koiSize: Number,
    koiPurpose: String,
});

const Consignment = mongoose.model('Consignment', consignmentSchema);

module.exports = Consignment;
