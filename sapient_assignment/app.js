function Validation() {
    let name = document.getElementById('username').value.trim();
    if (name == "") {
        let msg = document.getElementById('error');

        msg.innerHTML = "*  Username should not be empty";
        return false;
    }
    if (name.length < 3) {
        let msg = document.getElementById('error');

        msg.innerHTML = "*  Name should not be less then 3 char";
        return false;
    }
    if (name.length > 10) {
        let msg = document.getElementById('error');

        msg.innerHTML = "*  Name should not be more then 10 char"
        return false;
    }


    // password validation 
    let password = document.getElementById('Password').value.trim();
    if (password == "") {
        let msg = document.getElementById('error1');

        msg.innerHTML = "* Password should not be empty";
        return false;
    }
    if (password.length < 3) {
        let msg = document.getElementById('error1');

        msg.innerHTML = "* password should not be less then 3 char";
        return false;
    }
    if (password.length > 10) {
        let msg = document.getElementById('error1');

        msg.innerHTML = "*  password should not be more then 10 char"
        return false;
    }
}