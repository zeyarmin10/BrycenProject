// const firstNameEl = document.querySelector(".firstname");
// const lastNameEl = document.querySelector(".lastname");
// const userNameEl = document.querySelector(".username");
// const passwordEl = document.querySelector(".password");
// const confirmPasswordEl = document.querySelector(".confirm-password");
// const dateEl = document.querySelector(".date");
// const cityEl = document.querySelector('.city');
// const stateEl = document.querySelector('.state');
// const selectEl = document.querySelector('.select');
// const zipCodeEl = document.querySelector('.zip-code');
// const radioButtonEl = document.querySelector('.btn-radio');

//show hide form
const formEl = document.querySelector('.form');
const showHideModalBox = document.querySelector('.modal-box');
const signInBtn = document.querySelector('.sign-up-btn');
const submitBtn = document.querySelector('.btn-submit');

signInBtn.addEventListener('click', function(){
    if(showHideModalBox.style.display == 'block'){
        showHideModalBox.style.display = 'none';
    } else {
        showHideModalBox.style.display = 'block';
    }
});


// formEl.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

// });
function clickCheck() {
    let checkBox = document.getElementById("myCheck");
        if (checkBox.checked == '1'){
         document.getElementById("myCheck").value = '2';
       } else {
         document.getElementById("myCheck").value = '1';
       }
};

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//       alert('Valid email address!');
//       document.form1.text1.focus();
//       return true;
//     } else {
//       alert('You have entered an invalid email address!');
//       document.form1.text1.focus();
//       return false;
//     }
//   };



function validation(){
    let firstName = document.querySelector('.first-name').value;
    let lastName = document.querySelector('.last-name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;  
    let confirmPassword = document.querySelector('.confirm-password').value;
    let dateInput = document.querySelector('.date').value;
    let checkBox = document.querySelector('#myCheck').value;
    let ck_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let nameList = [];

    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("psw", password);


    JSON.parse(localStorage.getItem('name')) ;  // for get array (edited)
    localStorage.setItem("name", JSON.stringify(nameList));  // for set array
    // window.open("dashboard.html");
    window.open('testboard.html');


   
        // if( firstName == ""){
        //     document.querySelector('.error-message-first-name').innerHTML = "Please Enter First Name!";
        //     document.querySelector('.error-message-first-name').style.color = "red";
        // } else if (firstName >= 12) {
        //     document.querySelector('.error-message-first-name').innerHTML = "First name is too long";
        //     document.querySelector('.error-message-first-name').style.color = "red";
        // }
        // else {
        //     document.querySelector('.error-message-first-name').innerHTML ="✔";
        //     document.querySelector('.error-message-first-name').style.color ="Green";
        // };

        // if(lastName == ""){
        //     document.querySelector('.error-message-last-name').innerHTML = 'Please Enter Last Name!';
        //     document.querySelector('.error-message-last-name').style.color = 'red';
        // } else if (lastName > 12 ) {
        //     document.querySelector('.error-message-last-name').innerHTML = 'Last name is too long';
        //     document.querySelector('.error-message-last-name').style.color = 'red';
        // }
        // else {
        //     document.querySelector('.error-message-last-name').innerHTML = '✔';
        //     document.querySelector('.error-message-last-name').style.color = 'Green';
        // };

        // if (email == "") {
        //     document.querySelector('.error-message-email').innerHTML = 'Please Enter Email!';
        //     document.querySelector('.error-message-email').style.color = 'red';
        // }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        //     document.querySelector('.error-message-email').innerHTML = 'Invalid Email Address';
        //     document.querySelector('.error-message-email').style.color = 'Red';
        // }
        // else {
        //     document.querySelector('.error-message-email').innerHTML = '✔';
        //     document.querySelector('.error-message-email').style.color = 'Green';
        // };

        // if (password == '') {
        //     document.querySelector('.error-message-password').innerHTML = 'Please Enter Password!';
        //     document.querySelector('.error-message-password').style.color = 'red';
        // } else if (password.length < 8 || password.length >25) {
        //     document.querySelector('.error-message-password').innerHTML = 'Password must be between 8 and 25 character';
        //     document.querySelector('.error-message-password').style.color = 'red';
        // }
        // else if (password.length >8 || password.length <25){
        //     document.querySelector('.error-message-password').innerHTML = '✔';
        //     document.querySelector('.error-message-password').style.color = 'Green';
        // } else {
        //     document.querySelector('.error-message-password').innerHTML = '✔';
        //     document.querySelector('.error-message-password').style.color = 'Green';
        // }

        // if (confirmPassword == '') {
        //     document.querySelector('.error-message-confirm-password').innerHTML = 'Please Enter Password Again!';
        //     document.querySelector('.error-message-confirm-password').style.color = 'red';
        // } else if (confirmPassword.length < 8 || confirmPassword.length > 25){
        //     document.querySelector('.error-message-confirm-password').innerHTML = 'Password must be between 8 and 25 charactors.';
        //     document.querySelector('.error-message-confirm-password').style.color = 'red';
        // } else if (confirmPassword.length != password.length) {
        //     document.querySelector('.error-message-confirm-password').innerHTML = 'Password does not match.';
        //     document.querySelector('.error-message-confirm-password').style.color = 'red';
        // } else {
        //     document.querySelector('.error-message-confirm-password').innerHTML = '✔';
        //     document.querySelector('.error-message-confirm-password').style.color = 'Green';
        // };

        // if (confirmPassword == '') {
        //     document.querySelector('.error-message-confirm-password').innerHTML = 'Please Enter Password Again!';
        //     document.querySelector('.error-message-confirm-password').style.color = 'red';
        // }
        // else if (confirmPassword === password) {
        //     document.querySelector('.error-message-confirm-password').innerHTML = '✔';
        //     document.querySelector('.error-message-confirm-password').style.color = 'Green';
        // } else if(confirmPassword != password){
        //     document.querySelector('.error-message-confirm-password').innerHTML = 'Password does not match.';
        //     document.querySelector('.error-message-confirm-password').style.color = 'red';
        // }

        // if (dateInput == '') {
        //     document.querySelector('.error-message-date').innerHTML = 'Please Select Date!';
        //     document.querySelector('.error-message-date').style.color = 'red';
        // } else {
        //     document.querySelector('.error-message-date').innerHTML = '✔';
        //     document.querySelector('.error-message-date').style.color = 'Green';
        // };
        
        // if (checkBox == '1') {
        //     document.querySelector('.error-message-checkbox').innerHTML = 'Please check the terms and conditions!';
        //     document.querySelector('.error-message-checkbox').style.color = 'red';
        // } else {
        //     document.querySelector('.error-message-checkbox').innerHTML = '✔';
        //     document.querySelector('.error-message-checkbox').style.color = 'green';
        // };


    };

    // const isRequired = value => value === '' ? false : true;
    

    // const showError = (input, message) => {
    //     // get the form-field element
    //     const formField = input.parentElement;
    //     // add the error class
    //     formField.classList.remove('success');
    //     formField.classList.add('error');
    
    //     // show the error message
    //     const error = formField.querySelector('small');
    //     error.textContent = message;
    // };