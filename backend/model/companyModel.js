import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
            trim: true
        },

        companyLogo: {
            type: String,
            // image ka path / filename store karna best hota hai
        },

        companyAddress: {
            type: String,
            required: true
        },

        gstNumber: {
            type: String,
            required: true,
            uppercase: true
        },

        stateCode: {
            type: String,
            required: true
        },

        stateName: {
            type: String,
            required: true
        },

        companyContactNo: {
            type: String,
            required: true,
            maxlength: 10
        },

        companyEmail: {
            type: String,
            required: true,
            lowercase: true
        }
    },
    {
        timestamps: true
    }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
