    document.getElementById("signupForm1").addEventListener("submit",function(e){
    e.preventDefault();
    
    const userName = document.getElementById("userName").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorEl = document.getElementById("errormessage");

     if(!userName || !firstName || !lastName || ! email || !password || !confirmPassword) {
        errorEl.textContent = "All fields are required";
        return;
    }

    if (password !== confirmPassword) {
       errorEl.textContent = "Password do not match.";
        return;
    }

    if (password.length < 10) {
       errorEl.textContent = "Password must be at least 10 characters long.";
        return;
    }

    window.location.href ="new.html";


})