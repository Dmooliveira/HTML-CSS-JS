function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fielPassword = document.getElementById('field-password');

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fielPassword.type = 'text';
    } 
    else {
        eye.style.display = 'none';
        eyeSlash.sytle.display = 'block';
        fielPassword.type = 'password';
    }
};

