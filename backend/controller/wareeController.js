import ExcelJS from "exceljs";
import fs from "fs";



const createWareeDetails = async (req, res) => {
    const filePath = req.file.path;
    console.log(filePath);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.worksheets[0];
    const data = [];
    const headers = [];
    worksheet.eachRow((row, rowNumber) => {

        if (rowNumber === 1) {
            row.eachCell((cell) => {

                headers.push(cell.value);
            });
        } else {
            const obj = {};
            row.eachCell((cell, colNumber) => {
                obj[headers[colNumber - 1]] = cell.value;
            });
            data.push(obj);
        }
    });

    fs.unlinkSync(filePath);
    for (const dataItem of data) {
        console.log(dataItem['DOC NO']);
    };
    res.json(
        {
            Success: true,
            Message: "Get the details",
            Data: data
        }
    );

};
export default createWareeDetails;