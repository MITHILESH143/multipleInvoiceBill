import mongoose from 'mongoose';
const wareeSchema = new mongoose.Schema({
    srNo: {
        type: String,
        default: 0
    },
    date: {
        type: Date,
        required: true
    },
    connectionDate: {
        type: Date,
        required: true
    },
    docNo: {
        type: String,
        required: true
    },
    pickupLocation: {
        type: String,
        required: true
    },
    receiverName: {
        type: String
    },
    customerMobileNo: {
        type: String
    },
    destination: {
        type: String
    },
    pincode: {
        type: String
    },
    zone: {
        type: String
    },
    serviceProvider: {
        type: String
    },
    mode: {
        type: String
    },
    edlDistance: {
        type: String
    },
    oda_NonODA: {
        type: String,
        enum: ["ODA", "NON ODA"]
    },
    palletBoxCount: {
        type: String,
    },
    caseQty: {
        type: String
    },
    invoiceNo: {
        type: String
    },
    invoiceValue: {
        type: String
    },
    material: {
        type: String
    },
    estimatedDeliveryDate: {
        type: Date
    },
    deliveryStatus: {
        type: String
    },
    remarks: {
        type: String
    },
    actualDeliveryDate: {
        type: Date
    },
    receivedBy: {
        type: String,
    }

});
const waree = mongoose.model("wareeModel", wareeSchema);
export default waree;