/*
If you want to do it using only JavaScript without using server-side technologies like PHP,
 you can use client-side storage options like localStorage or sessionStorage to store the username and 
 display it on the user page.*/

// On the login page, after verifying the username and password, store the username in localStorage:


username = localStorage.getItem('username'); // get value from local storege
if (username) {
  // sent user details to the user pagge
  document.getElementById("childUserName").textContent = username; 
  document.getElementById('Uname_').textContent = username;
  document.getElementById('mailname').textContent = username;
    }

//------------ below codes tha can be user to when json file data store to a seesion ----------------
// jsarray = JSON.parse(sessionStorage.getItem("jsArray"));
// document.getElementById('childUserName').innerHTML = jsarray[0];
//    console.log(jsarray);

// logout btn
function logout(){
  window.location.replace("http://127.0.0.1:5500/pages/login.html");
}
// add userbtn
function createUser(){
  localStorage.removeItem('btnName'); // clear local value of btn bec no need to change btn name when someone click create account btn

  window.location.replace("http://127.0.0.1:5500/pages/adduser.html");
}