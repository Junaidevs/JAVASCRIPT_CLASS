document.getElementById("signupForm-B").addEventListener("submit",function(e){
    e.preventDefault();
    
    const userName = document.getElementById("userName").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorEl = document.getElementById("errormessage");

    if (userName.length > 10){
        errorEl.textContent = "Username must not be more than 10 characters";
        return;
    }
    if (firstName == ""){
        errorEl.textContent="firstName is required";
        return;
        
    }else if(length < 4){
        "must be up to  4 characters"
    }
    if (lastName == ""){
        errorEl.textContent="firstName is required";
        return;
        
    }else if(length < 4){
        "must be up to  4 characters"
    }

     if (email.length < 6) {
       errorEl.textContent = "email must be at least 6 characters long.";
        return;
    }

    //  if(!userName || !firstName || !lastName || ! email || !password || !confirmPassword) {
    //     errorEl.textContent = "All fields are required";
    //     return;
    // }

    if (password !== confirmPassword) {
       errorEl.textContent = "Password do not match.";
        return;
    }

    if (password.length < 10) {
       errorEl.textContent = "Password must be at least 10 characters long.";
        return;
    }

    window.location.href ="nsign.js";


})