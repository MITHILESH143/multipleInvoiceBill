import Company from "../model/companyModel.js";
import cloudinary from "../config/cloudinary.js";

/**
 * CREATE Company
 */
export const createCompany = async (req, res) => {
  try {
    const {
      companyName,
      companyAddress,
      gstNumber,
      stateCode,
      stateName,
      companyContactNo,
      companyEmail
    } = req.body;

   
    const cloudinaryResult = req.file ? await cloudinary.uploader.upload(req.file.path, {folder: "company_logos"}) : null;
    const companyLogoUrl = cloudinaryResult ? cloudinaryResult.secure_url : null;

    if (!companyName || !companyAddress || !gstNumber) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      });
    }

    const company = new Company({
      companyName,
      companyLogo: companyLogoUrl,
      companyAddress,
      gstNumber,
      stateCode,
      stateName,
      companyContactNo,
      companyEmail
    });
console.log(companyName);
    await company.save();

    res.status(201).json({
      success: true,
      message: "Company created successfully",
      data: company
    });

  } catch (error) {
    console.error(`error message are created: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};


/**
 * GET All Companies
 */
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: companies.length,
      data: companies
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};


/**
 * GET Company by ID
 */
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found"
      });
    }

    res.status(200).json({
      success: true,
      data: company
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid ID",
      error: error.message
    });
  }
};
