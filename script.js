let user = document.getElementById("text");
let pass = document.getElementById("password");
let userflag = 1;
let passflag = 1;
function validateform() {

    if (user.value == "") {
        document.getElementById("usererror").innerHTML = "User Name is empty";
        userflag = 0;
    }
    else if (user.value.length < 3) {
        document.getElementById("usererror").innerHTML = "User Name requires minimum 3 characters";
        userflag = 0;
    } else {
        document.getElementById("usererror").innerHTML = "";
        userflag = 1;
    }


    if (pass.value == "") {
        document.getElementById("passerror").innerHTML = "Password is empty";
        passflag = 0;
    }

    else {
        document.getElementById("passerror").innerHTML = "";
        passflag = 1;
    }

    if (userflag && passflag) {
        return true;
    }
    else {
        return false;
    }

}

