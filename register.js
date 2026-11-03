

/* form for registration validaion */

const reg_form = document.getElementById("reg_form");

reg_form.addEventListener("submit", (event) => {

  event.preventDefault();

  const name =document.getElementById("name").value.trim();

  const email = document.getElementById("reg_email").value.trim().toLowerCase();

  const password = document.getElementById("reg_password").value.trim();

  const confirmPassword = document.getElementById("conf_password").value.trim();

  const message = document.getElementById("message");

  if( password.length < 6){
    message.textContent = "Password must be atleast 6 characters"
    message.style.color = "red";
    return;
  }

  if(password !== confirmPassword){
    
    message.textContent = "Password do not match!";
    message.style.color = "red";
    return;
  }

  /* check if email is already registered */
  const existingUser = JSON.parse(
    localStorage.getItem("user")
  );

  if( existingUser && existingUser.email === email){
    message.textContent = "Email is already registered!";

    setTimeout( () => {
      message.textContent = "Registration successful!", 2000;
    })
     
    
  }

  /* save account*/
  const user = {
    name: name,
    email: email,
    password: password,
  }

  localStorage.setItem("user", JSON.stringify(user));

  message.textContent = "Registration successful!";
  message.style.color = "green";
  window.location.href = "index.html";

  setTimeout( () => {
      message.textContent = "";} , 3000)

})



