const blogForm = document.querySelector("#addblog-form");
const blogTitle = document.querySelector("#blog-title");
const blogContent = document.querySelector("#blog-content");
 blogForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const title = blogTitle.value; 
    const body = blogContent.value; 
    const token = localStorage.getItem('token');
    if (!token) {
        alert('You must be logged in to add a blog. Please log in first.');
        return;
    }
    let response = await fetch("/api/blog", {
        method: "POST",
        headers: {                              
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({  
            title: title,
            body: body
        })
    });
    let data;
    try {
        data = await response.json();
    } catch (err) {
        data = await response.text();
    } 
    if (!response.ok) {
        console.log("Failed to add blog:", data); 
    } else {  
        console.log(data);
        console.log("Blog added successfully");
    }
});