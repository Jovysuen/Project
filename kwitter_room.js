//ADD YOUR FIREBASE LINKS HERE
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
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room_names-",Room_names)
    row="<div class='room_name' id="+Room_names+" onclick='Redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row
    //End code
    });});}
getData();

    username=localStorage.getItem("username")
    document.getElementById("user_name").innerHTML="Welcome "+username+"!"

function addroom(){
    room_name=document.getElementById("roomname").value
    firebase.database().ref("/").child(room_name).update({purpose:"addingRoom"})
    localStorage.setItem("roomname_roomname",room_name)
    window.location="kwitter_page.html"
    
}
function Redirecttoroomname(name){
    localStorage.setItem("roomname_roomname",name)
    window.location="kwitter_page.html"
}

function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("roomname_roomname")
    window.location="index.html"
}