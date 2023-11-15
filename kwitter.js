function loginbutton(){
    window.location="kwitter_room.html"
    username=document.getElementById("input1").value
    localStorage.setItem("username",username)
}