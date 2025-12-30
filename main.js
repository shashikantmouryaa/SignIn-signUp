const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");

function showsignup() {
    signUp.classList.add("active");
    signIn.classList.remove("active");
}

function showsignin() {
    signIn.classList.add("active");
    signUp.classList.remove("active");
}

function signin(){
    document.getElementById("SingInform").submit();
}

function signUP(){
    document.getElementById("SingUpform").submit();
}


function togglePassword(id, icon) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

