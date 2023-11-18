let user = document.getElementById("text");
let pass = document.getElementById("password");
let flag = 1;
function validateform() {

    if (user.value == "") {
        document.getElementById("usererror").innerHTML = "User Name is empty";
        flag = 0;
    }
    else if (user.value.length < 3) {
        document.getElementById("usererror").innerHTML = "User Name requires minimum 3 characters";
        flag = 0;
    } else {
        document.getElementById("usererror").innerHTML = "";
        flag = 1;
    }


    if (pass.value == "") {
        document.getElementById("passerror").innerHTML = "Password is empty";
        flag = 0;
    }

    else {
        document.getElementById("passerror").innerHTML = "";
        flag = 0;
    }

    if (flag) {
        return true;
    }
    else {
        return false;
    }
}

