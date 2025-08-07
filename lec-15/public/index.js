const signupForm = document.querySelector('#user');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function addUser() {
  let newuser={
    email:email,
    password:password
  }

    fetch("/user", {
    method: 'POST',
    body: JSON.stringify(newuser),
    headers: {
      'Content-Type': 'application/json'
    },
    })
    .then((res)=>{
return res.json();
    })
    .then((data)=>{
        console.log(data);
        if(data.success){
            alert(data.message);
            signupForm.reset();
        }
        else{
            alert(data.error);
            signupForm.reset();
        }

    })
    .catch((err)=>{
        console.log(err);
    })
};
signupForm.addEventListener("submit" , function(event){
event.preventDefault()
addUser(email.value , password.value);
})