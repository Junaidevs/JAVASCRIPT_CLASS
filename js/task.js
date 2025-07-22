document.getElementsById("signupForm").addEventListener("submit",function(e){
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("email").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const error = document.getElementById("signupError");


    if(!firstName || !lastName || !password || !confirmPassword) {
         errorE1.textContent = "All fields are required.";
        return;
    }
     if(password !== confirmPassword) {
        errorE1.textContent = "Passwords do not match";
        return;
     }

     window.location.href ="login.html";
    })




