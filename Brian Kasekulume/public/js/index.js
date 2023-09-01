const Validate = (event) => {
  let error = 0;

  // picking input fields with their names

  let firstname = document.signupform.firstname;
  let lastname = document.signupform.lastname;
  let date = document.signupform.date
  let gender = document.signupform.gender
  let country = document.signupform.country
  let state = document.signupform.state
  let town = document.signupform.town
  let zip = document.signupform.zip
  let phone = document.signupform.phone
  // let phon = document.signupform.phon
  // let phone = document.signupform.phone;
  // let email = document.signupform.email;
  

  let errorfirstName = document.getElementById("firstNameError");
  let errorlastName = document.getElementById("errorlastName");
  let dateError = document.getElementById("dateError");
  let genderError = document.getElementById("genderError")
  let countryError = document.getElementById("countryError");
  let stateError = document.getElementById("stateError")
  let townError = document.getElementById("townError")
  let zipCodeError = document.getElementById("zipCodeError");
  let phoneError = document.getElementById("phoneError")
  // let phonError = document.getElement("phonError")
  // let phoneError = document.getElementById("phoneError");
  // let emailError = document.getElementById("emailError");


  // validating first name input
  // validating for emptiness

  if (firstname.value == "") {
    firstname.style.border = "1px solid red";
    errorfirstName.textContent = "first  name is required";
    errorfirstName.style =
      " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";

    firstname.focus();
    error++;
  } else if (firstname.value.length < 2) {
    firstname.style.border = "1px solid red";
    errorfirstName.textContent = "must be greater than 2";
    errorfirstName.style = "color:red font-size:11px";
    firstname.focus();
    error++;
  } else if (firstname.value.length > 15) {
    firstname.style.border = "3px solid red";
    errorfirstName.textContent =
      "first  name must not be greater than 255 charactersd";
    errorfirstName.style = "color: red font-size:11px";
    firstname.focus();
    error++;
  } else {
    firstname.style.border = "3px solid green";
    errorfirstName.textContent = "";
    lastname.focus();
  } 
  if (lastname.value == "") {
    lastname.style.border = "1px solid red";
    errorlastName.textContent = "last  name is required";
    errorlastName.style =
      " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";

    lastname.focus();
    error++;
  } else if (lastname.value.length < 2) {
    lastname.style.border = "3px solid red";
    errorlastName.textContent = "must be greater than 2";
    errorlastName.style = "color:red font-size:11px";
    lastname.focus();
    error++;
  } else if (lastname.value.length > 15) {
    lastname.style.border = "3px solid red";
    errorlastName.textContent =
      "last  name must not be greater than 255 charactersd";
    errorlastName.style = "color: red font-size:11px";
    lastname.focus();
    error++;
  } else {
    lastname.style.border = "3px solid green";
    errorlastName.textContent = "";
    // lastname.focus();
  }
  if (date.value == "") {
    date.style.border = "1px solid red";
    dateError.textContent = "Date is required";
    dateError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";
    date.focus();
    error++;
  }else {
        date.style.border = "3px solid green";
        dateError.textContent = "";
        gender.focus();
      }
  if (gender.value == "") {
        gender.style.border = "1px solid red";
        genderError.textContent = "choose male or female";
        genderError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
        // fontsize:11px; fontfamily:sanserif;"
        gender.focus();
        error++;
  }
   else {
     gender.style.border = "3px solid green";
     genderError.textContent = "";
    country.focus();
  }
  if (country.value == "") {
    country.style.border = "1px solid red";
    countryError.textContent = "choose a country";
    countryError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
    // fontsize:11px; fontfamily:sanserif;"
    country.focus();
    error++;
}else {
  country.style.border = "3px solid green";
  countryError.textContent = "";
  state.focus();
}
 
if (state.value == "") {
  state.style.border = "1px solid red";
  stateError.textContent = "choose a state";
  stateError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
  // fontsize:11px; fontfamily:sanserif;"
  state.focus();
  error++;
}else {
  state.style.border = "3px solid green";
  stateError.textContent = "";
  town.focus();
}
if (town.value == "") {
  town.style.border = "1px solid red";
  townError.textContent = "choose a town";
  townError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
  // fontsize:11px; fontfamily:sanserif;"
  zip.focus();
  error++;
}else {
  town.style.border = "3px solid green";
  townError.textContent = "";
  zip.focus();
}
if (zip.value == "") {
  zip.style.border = "1px solid red";
  zipError.textContent = "choose  your code";
  zipError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
  // fontsize:11px; fontfamily:sanserif;"
  phone.focus();
  error++;
}  else {
  zip.style.border = "3px solid green";
  zipError.textContent = "";
  zip.focus();
}

const phoneRegex = /^\+256\d{9}$/;

  if (phone.value == "") {
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number is required";
    phoneError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    error++;
  } else if (!phoneRegex.test(phone.value)) {
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number should start with +256";
    phoneError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    error++;
  } else {
    phone.style.border = "3px solid green";
    phoneError.textContent = "";
    // password.focus();
  }
  // if (password.value == "") {
  //   password.style.border = "1px solid red";
  //   passwordError.textContent = "password is required";
  //   passwordError.style =
  //     "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";

  //   password.focus();
  //   error++;
  // } else if (password.value.length > 15) {
  //   password.style.border = "1px solid red";
  //   passwordError.textContent =
  //     "password must not be greater than 15 characters";
  //   passwordError.style =
  //     "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";
  //   password.focus();
  //   error++;
  // } else {
  //   password.style.border = "3px solid green";
  //   passwordError.textContent = "";

  //   confirmPassword.focus();
  //   error++;
  // }
  // if (confirmPassword == "") {
  //   confirmPassword.style.border = "1px solid red";
  //   confirmPasswordError.textContent = "confirm password is required";
  //   confirmPasswordError.style =
  //     " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";
  //   confirmPassword.focus();
  //   error++;
  // } else {
  //   confirmPassword.style.border = "3px solid green";
  //   confirmPasswordError.textContent = "";

  //   // confirmPassword.focus();
  //   error++;
  // }

  if (error > 0) {
    event.preventDefault();
  }
};
