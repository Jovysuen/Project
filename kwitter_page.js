//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDmSlgjnJdqYMrtZS9wwy5HgZovPVihNSw",
    authDomain: "project-93-f3e91.firebaseapp.com",
    databaseURL: "https://project-93-f3e91-default-rtdb.firebaseio.com",
    projectId: "project-93-f3e91",
    storageBucket: "project-93-f3e91.appspot.com",
    messagingSenderId: "673027968431",
    appId: "1:673027968431:web:7840a5367fa707e737335a",
    measurementId: "G-7NNQWZEQLB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username")
  room_name=localStorage.getItem("roomname_roomname")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg=document.getElementById("ti").value
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("ti").value=""
}

function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("roomname_roomname")
    window.location="index.html"
}