const loginForm = document.getElementById('login-form');
const loginPassword = document.getElementById('login-password');
const loginEmail = document.getElementById('login-email');
const loginbutton = document.getElementById('login-button'); 
loginForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const email = loginEmail.value; 
    const password = loginPassword.value;
    let response = await fetch("/api/auth", {
        method: "POST", 
        headers: {                              
            "Content-type": "application/json, charset=UTF-8"
        },
        body: JSON.stringify({  

            email: email,
            password: password
        })
    }); 
    if (!response.ok) {
        console.error("Login failed:", await response.text());
    } else {
        let data = await response.json();
        console.log(data);
        console.log("Login successful");
    }
});
  