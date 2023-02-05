function get_info() {
    var name = document.getElementById("E_Name").value;
    var age = document.getElementById("E_age").value;
    var designation = document.getElementById("designation").value;
    var salary = document.getElementById("salary").value;
    var E_location = document.getElementById("location").value;
    var email_id = document.getElementById("email_id").value;
    var Date = document.getElementById("date_of_joining").value;
    var contact = document.getElementById("contact").value;

     console.log(E_location);
    var e_name = localStorage.setItem("name", name);
    var e_age = localStorage.setItem("age", age);
    var e_designation = localStorage.setItem("designation", designation);
    var e_salary = localStorage.setItem("salary", salary);
    var e_location = localStorage.setItem("E_location", E_location);
    var e_email = localStorage.setItem("email_id ", email_id);
    var e_Date = localStorage.setItem("Date ", Date);
    var e_contact = localStorage.setItem("contact ", contact)

}

