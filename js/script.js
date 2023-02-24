Users = [['Mash',123], ['Mashi',456]]; // default user list
function fun(){
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
  
   var loopstate = true;// get state value as a invalid user details 
   // check user name and password match or not
   for(let i = 0; i < Users.length; i++){
              // inizilaitioan user name and password as false state(incorrect)
              var userNameState =  false;
              var passwordState =  false;
          
            if(Users[i][0] == username) {
                userNameState = true; // set user name as correct 
            if(Users[i][1] == password){
              passwordState = true; // set user name as correct 
              
              localStorage.setItem('username', username); // store user name on local store
              //window.location.href = 'user.html';
    
              // sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
              //jsarray = [username];
              window.location.replace("http://127.0.0.1:5500/pages/user.html"); // after validation route the next page
              
              loopstate = false; // set state value as false bec there was valid user details
              break; // if found valid details then no need to check again
            }else break; // if user name correct but not correct password then no need to check any more times.
          }
  }
  // if user details invalid then show the what was the error of those
  if(loopstate){
    validateForm(username,password, userNameState,passwordState) /// call the validation form to show error msg
  }

function validateForm(username,password,userNameState , passwordState) {
  // blank field indentify 
  if (username == "") {
    document.getElementById("checkuser").innerHTML = 'UserName field must be filled out';
    
  }else if(!userNameState){ // if user name is weong then show this
    document.getElementById("checkuser").innerHTML = 'username went wrong';
  }
  
  // Check if the password is empty
  if (password == "") {
    document.getElementById("checkpw").innerHTML = 'Password field must be filled out';
  } else if(!passwordState){ // if password is wrong then show this
    document.getElementById("checkpw").innerHTML = 'password went wrong';
  }
 }
}
// new user sign in btn any one can register with this page
function signIn(){
  
  localStorage.setItem('btnName', 'Login');
  
  window.location.replace("http://127.0.0.1:5500/pages/adduser.html");
}
// create new user from signin page 
function adduser(){
  localStorage.clear();
  var username = document.getElementById('new_username').value;
  var password = document.getElementById('new_password').value;
  // check forms are not empty
if(username != '' &  password !=''){
    // update local storage
    localStorage.setItem('username', username);
    Users.push([username,password]);
    window.location.replace("http://127.0.0.1:5500/pages/user.html"); // show user page
  }else{
    alert('filed cant be empty'); // show invalid msg
  }
 

}
