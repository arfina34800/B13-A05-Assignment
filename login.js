

  document.getElementById("loginBtn").addEventListener("click", function(){

let username = document.querySelector("input[type=text]").value;
let password = document.querySelector("input[type=password]").value;

if(username === "admin" && password === "admin123"){
    window.location.href = "home.html";
}else{
    alert("Wrong Username or Password");
}

});

