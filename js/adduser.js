// change create user page btn as Login when someone clicking SignIn btn to register
n =localStorage.getItem('btnName');
console.log(n);
if(n){
    document.getElementById('logoutbtn').innerHTML = n;
    document.getElementById('logoutbtn').style.backgroundColor = 'blue';
} 
    

