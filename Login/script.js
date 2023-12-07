const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const linkSignup = document.getElementById('linksignup');
const linkSignin = document.getElementById('link_signin');

const markicon = document.querySelector('.icon');
const dropdown = document.querySelector('.dropdown_nav');

markicon.onclick = function () {
    markicon.classList.toggle('xmark')
};

markicon.addEventListener('click', () => {
    dropdown.classList.toggle('open');
})

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

linkSignup.addEventListener('click', () => {
    container.classList.add("active");
});

linkSignin.addEventListener('click', () => {
    container.classList.remove("active");
});

let password = document.getElementById('password');
let rePassword = document.getElementById('re_password');
let loginPassword = document.getElementById('login_pwd');
const eyeIconRepeat = document.getElementById('eyeiconre');
const eyeIcon = document.getElementById('eyeicon');
const loginIcon = document.getElementById('login_eyeicon');

loginIcon.onclick = function () {
    if (loginPassword.type == "password") {
        loginPassword.type = "text";
        loginIcon.classList.add('ac');
    }
    else {
        loginPassword.type = "password";
        loginIcon.classList.remove('ac');
    }
}

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.classList.add('ac');
    }
    else {
        password.type = "password";
        eyeIcon.classList.remove('ac');
    }
}

eyeIconRepeat.onclick = function () {
    if (rePassword.type == "password") {
        rePassword.type = "text";
        eyeIconRepeat.classList.add('ac');
    }
    else {
        rePassword.type = "password";
        eyeIconRepeat.classList.remove('ac');
    }
}




