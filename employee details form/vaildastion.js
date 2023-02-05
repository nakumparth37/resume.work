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

    let location = document.forms["Employee_detials"][""].value;
    if (location == "") {
      alert("Location must be filled out or selected");
      return false;
    }
    else if (isNaN(location) == true) {
      alert("Location  can't be number");
    }

    let email = document.forms["Employee_detials"]["Employee_Email"].value;
    var petten = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
    if (email == "") {
      alert("email must be filled out");
      return false;
    }
    else if (petten.match(email)) {
      alert("email must be in frometted");
    }

    let date = document.forms["Employee_detials"]["Date_of_Joining"].value;
    if (date == "") {
      alert("data must be filled out");
      return false;
    }

    let contact = document.forms["Employee_detials"]["Contect"].value;
    if (contact == "") {
      alert("Contect number must be filled out");
      return false;
    }
    else if (contect.length == 10) {
      alert("Contect number must be 10 Digit");
      return false;
    } 

    
    
  }