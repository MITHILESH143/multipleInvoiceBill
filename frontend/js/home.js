  document.addEventListener("DOMContentLoaded", function () {

      // const date = document.querySelector('input[name="invoiceDate"]');
      const form = document.querySelector('#fileUpload');

      function createCompanyTable(data) {
    const container = document.getElementById("tableContainer");

    // Clear old table if exists
    container.innerHTML = "";

    // Create table
    const table = document.createElement("table");
    table.id = "companyTable";
    table.border = "1px solid black";

    // Create thead
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    const headers = ["Case Qty", "WEL/WRPL INVOICE NO", "City", "Phone"];

    headers.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      headRow.appendChild(th);
    });

    thead.appendChild(headRow);

    // Create tbody
    const tbody = document.createElement("tbody");
    let totalItems = 0;
    // Fill rows
    for (const item of data) {
      const row = document.createElement("tr");
      
      row.innerHTML = `
        <td>${item['Case Qty'] ?? ""}</td>
        <td>${item['WEL/WRPL INVOICE NO.'] ?? ""}</td>
        <td>${item.city ?? ""}</td>
        <td>${item.phone ?? ""}</td>
      `;

      tbody.appendChild(row);
      totalItems += item['Case Qty'] ? Number(item['Case Qty']) : 0;
    }
  console.log("Total Case Qty:", totalItems);
  const totalRow = document.createElement("tr");

  totalRow.innerHTML = `
  <td>Total Qty: <strong>${totalItems}</strong></td>
  
  `;
  tbody.appendChild(totalRow);
    // Append all
    table.appendChild(thead);
    table.appendChild(tbody);

    
    container.appendChild(table);
  }


      form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const formData = new FormData(form);

          // let DateOfYears = new Date(date.value).getFullYear();
          // let dateOfMonth = new Date(date.value).getMonth() + 1;
          // if(dateOfMonth >= 4){

          //     console.log(`${DateOfYears} and ${DateOfYears + 1}`);
          // };
          const response = await fetch("http://localhost:5000/api/createWareeDetails", {
              method: "POST",
              body: formData

          });
          const result = await response.json();
          if (result.Success) {
              console.log(result.Data);
              form.reset();
          };
          
          const dataCompany = result.Data;
          createCompanyTable(dataCompany);


      });
  });