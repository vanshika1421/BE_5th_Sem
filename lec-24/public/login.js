const loginForm = document.querySelector('#login-form');
const loginPassword = document.querySelector('#login-password');
const loginEmail = document.querySelector('#login-email');
const loginButton = document.querySelector('#login-button'); 

loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = loginEmail.value; 
    const password = loginPassword.value;

    let response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {                              
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({  
            email: email,
            password: password
        })
    }); 

    let data;
    try {
        data = await response.json();
    } catch (err) {
        data = await response.text();
    }

    if (!response.ok) {
       console.log("Failed");
    } else {
        console.log(data);
        console.log("Login successful");
    }
});
