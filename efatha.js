
const login = document.getElementById("form");


login.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();

  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  /* -- get registered account */
  const user = JSON.parse( localStorage.getItem("user"));

  /* check if account exist */
  if(!user){
    message.textContent = "No registered account found!";
    message.style.color = "red";
    return;
  }

  /* validate credentials */
  if(username === user.email && password === user.password){
    
    message.textContent = "login successful!"
    message.style.color = "green"

    setTimeout( () => {
      message.textContent = "";} , 3000)
    
    

    sessionStorage.setItem("loggedIn", "true");

    window.location.href = "dashboard.html"
  } else {
    message.textContent = "invalid username or password";
    message.style.color = "red"
  }

  
})


/* onclick register now button */
const reg_now = document.getElementById("reg_now");

reg_now.addEventListener("click", () => {
  window.location.href = "register.html";
});