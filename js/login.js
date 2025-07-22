 document.getElementById("loginForm1").addEventListener("submit",function(e){
    e.preventDefault();
    
   
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorEl = document.getElementById("errormessage");

     if(! email || !password) {
        errorEl.textContent = "All fields are required";
        return;
    }

   
    if (password.length < 10) {
       errorEl.textContent = "Password must be at least 10 characters long.";
        return;
    }

    window.location.href ="login.html"; 


})