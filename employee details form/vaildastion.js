function validateForm() {
  let name = document.forms["Employee_detials"]["Employee_Name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  let age = document.forms["Employee_detials"]["Employee_Age"].value;
  if (age == "") {
    alert("Age must be filled out");
    return false;
  }

  let gender = document.forms["Employee_detials"]["Employee_Gender"].value;
  if (gender == "") {
    alert("Gender must be selected");
    return false;
  }

  let designation = document.forms["Employee_detials"]["designation"].value;
  if (designation == "") {
    alert("designation must be selected");
    return false;
  }

  let location = document.forms["Employee_detials"]["location"].value;
  // let location_petten = /^[a-zA-Z+|[0-9]\s]+$/;
  if (location == "") {
    alert("Location must be filled out or selected");
    return false;
  }
  // else if (!location_petten.test(location)) {
  //   alert("Location can not have number ");
  //   return false;
  // }


  let salary = document.forms["Employee_detials"]["salary"].value;
  if (salary == "") {
    alert("salary must be filled out");
    return false;
  }

  let email = document.forms["Employee_detials"]["Employee_Email"].value;
  var email_petten = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
  if (email == "") {
    alert("email must be filled out");
    return false;
  }
  else if (!email_petten.test(email)) {
    alert("Email is not vild");
    return false;
  }

  let date = document.forms["Employee_detials"]["Date_of_Joining"].value;
  if (date == "") {
    alert("data must be filled out");
    return false;
  }

  let contact = document.getElementById("contact").value;
  if (contact == "") {
    alert("Contect number must be filled out");
    return false;
  }
  else if (contact.length != 10) {
    alert("Contect number must be 10 Digit");
    return false;
  }



}