import XLSX from "xlsx";
import fs from "fs";



const getWareeDetails = async (req, res) => {
 const filePath = req.file.path;
 console.log(filePath);
    const workbook = XLSX.readFile(filePath, {
        cellDates: true
    });

  // First sheet
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Sheet → JSON
  const data = XLSX.utils.sheet_to_json(worksheet);
  console.log(data);
   fs.unlinkSync(filePath);
    res.json(
        {
            Success: true,
            Message: "Get the details", 
            Data : data
        }
    );

};
export default getWareeDetails;