let email = prompt("enter your email");
let a = '@'
let dot = '"DOT"'
if(email.includes('@') && email.slice(-4).includes('.')){
document.write('valid E-mail');
}
else{
    document.write(`invalid E-mail because either you didint add ${a} or ${dot} or ${dot} and ${a} `);
    
}
