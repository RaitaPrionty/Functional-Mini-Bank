// get the button
document.getElementById('btn-submit').addEventListener('click',function(){

    // get the login email input
    const email = document.getElementById('user-email');
    const emailtext = email.value;

    // get password input
    const password = document.getElementById('user-password');
    const passwordText = password.value;

    if(emailtext === 'raita@gmail.com' && passwordText === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('your password is wrong');
    }
})