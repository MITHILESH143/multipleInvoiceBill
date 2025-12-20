document.addEventListener("DOMContentLoaded", function () {

    // const date = document.querySelector('input[name="invoiceDate"]');
    const form = document.querySelector('#fileUpload');

    form.addEventListener('submit', async(e) => { 
        e.preventDefault();
        const formData = new FormData(form);

        // let DateOfYears = new Date(date.value).getFullYear();
        // let dateOfMonth = new Date(date.value).getMonth() + 1;
        // if(dateOfMonth >= 4){

        //     console.log(`${DateOfYears} and ${DateOfYears + 1}`);
        // };
        const response = await fetch("http://localhost:5000/api/getWareeDetails",{
            method: "POST",
            body: formData

        });
        const result = await response.json();
        if(result.Success){
            console.log(result.Data);
            form.reset();
        };

        
    });
});