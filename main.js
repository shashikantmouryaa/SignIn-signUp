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
    
    document.getElementById("myForm").submit();
}