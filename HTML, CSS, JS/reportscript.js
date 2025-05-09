const hamMenu = document.getElementById('hamburger-menu');

const offScreen = document.getElementById('nav-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

let form = document.getElementById('report-bug');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let username = document.getElementById("inputUsername");
    let email = document.getElementById("inputEmail");
    let desc = document.getElementById("inputDesc");

    if(username.value == "" || email.value == "" || desc.value == ""){
        alert("Please fill in all fields");
        return;
    }

    for(let i = 0; i < username.value.length; i++){
        if(username.value[i] == " "){
            alert("Username cannot contain spaces");
            return;
        }
        if(!/[0-9a-zA-Z_]/.test(username.value[i])){
            alert("Username can only contain letters, numbers, and underscore");
            return;
        }
    }

    if(!email.value.endsWith("@gmail.com")){
        alert("Email must be end with @gmail.com");
        return;
    }

    if(email.value.length < 12){
        alert("Email must be at least 12 characters long");
        return;
    }

    if(desc.value.length < 20){
        alert("Description must be at least 20 characters long");
        return;
    }

    alert("Bug Report Submitted Successfully!");
});