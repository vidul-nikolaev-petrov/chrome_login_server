// start settings
var id_username = 'Id of the username element', // for example 'id_username'
    id_password = 'Id of the password element', // for example 'id_password'
    username = 'your username',
    password = 'your password';
// end settings

document.getElementById(id_username).value = username;
document.getElementById(id_password).value = password;
document.forms[0].submit();
