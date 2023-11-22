
  
      
      function toggleSignIn() {
        var nameField = document.getElementById("nameField");
        var title = document.getElementById("title");
        var signupBtn = document.getElementById("signupBtn");
        var signinBtn = document.getElementById("signinBtn");

        if (nameField.style.maxHeight === "60px") {
          nameField.style.maxHeight = 0;
          title.innerHTML = "Log In";
          signupBtn.textContent = "Log in";
          signinBtn.textContent = "Register";
        } else {
          nameField.style.maxHeight = "60px";
          title.innerHTML = "Register";
          signupBtn.textContent = "Register";
          signinBtn.textContent = "Log in";
        }
      }

      function validateform() {
        var name = document.myform.name.value;
        var x = document.myform.email.value;
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        var password = document.myform.password.value;

        if (name == null || name == "") {
          alert("Name can't be blank");
          return false;
          console.log(name);
        } else if (password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return false;
        } else if (
          atposition < 1 ||
          dotposition < atposition + 2 ||
          dotposition + 2 >= x.length
        ) {
          alert(
            "Please enter a valid e-mail address \n atpostion:" +
              atposition +
              "\n dotposition:" +
              dotposition
          );
          console.log(email);
          return false;
        }
    
        // Simulate form submission and transition to the sign-in view
        toggleSignIn();
        return false; // Prevent actual form submission
      } 


