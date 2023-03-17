var firebaseConfig = {
      apiKey: "AIzaSyC3aTpIt97SYXJicPe0TWazUeVwM1PRZcw",
      authDomain: "kwitter-5a42c.firebaseapp.com",
      databaseURL: "https://kwitter-5a42c-default-rtdb.firebaseio.com",
      projectId: "kwitter-5a42c",
      storageBucket: "kwitter-5a42c.appspot.com",
      messagingSenderId: "511256861915",
      appId: "1:511256861915:web:aeaf9530e6c318b052c0fe"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
