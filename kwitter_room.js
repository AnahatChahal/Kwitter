
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAJsw8cFjHc3FC4qCUiGh5Ah7UD5Inr9mw",
      authDomain: "kwitter-29ded.firebaseapp.com",
      databaseURL: "https://kwitter-29ded-default-rtdb.firebaseio.com",
      projectId: "kwitter-29ded",
      storageBucket: "kwitter-29ded.appspot.com",
      messagingSenderId: "501749057613",
      appId: "1:501749057613:web:904a2ae48d254ce8bb7404"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function  addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
   purpose:"addingroomname"
      });
      localStorage.setItem("room_name",  room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room-name"+Room_names);
       row="<div  class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //Start code

      //End code
      });
});
}
getData();
function  redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function  logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}