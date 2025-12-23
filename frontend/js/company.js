document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector('#companyDetailsForm');

    form.addEventListener('submit', async function(e){
e.preventDefault();
const formData = new FormData(form);
try {
    const response = await fetch ('http://localhost:5000/api/companies', {
        method: "POST",
        body: formData
    });
    const result = await response.json();
    console.log("Server Response:", result);
    
} catch (error) {
    console.error("Error in a Submit a form:", error);
}

    });
});