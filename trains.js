$(document).ready(function() {




	var config = {

	  	apiKey: "AIzaSyBq3PEKF3VlcmKjr6ce86uIP-M7TN2OX1o",
	    authDomain: "trains-b9428.firebaseapp.com",
	    databaseURL: "https://trains-b9428.firebaseio.com",
	    storageBucket: "trains-b9428.appspot.com",
	    messagingSenderId: "883880715985"



	};

	firebase.initializeApp(config);

	var database = firebase.database();

	
	$("#add-train-btn").on("click", function(event) {
	  event.preventDefault();

	    

	  
	  var trainName= $("#train-name-input").val().trim();
	  var destination = $("#destination-input").val().trim();
	  var nextArrival = moment($("#next-arrival-input").val().trim(), "00:00").format("X");
	  var minutesUntilArrival = $("#minutes-until-arrival-input").val().trim();

	  
	  var newTrain = {
	    name: trainName,
	    destination: destination,
	    nextArrival: nextArrival,
	    minutesUntilArrival: minutesUntilArrival
	  };

	  
	  database.ref().push(newTrain);

	  
	  console.log(newTrain.name);
	  console.log(newTrain.destination);
	  console.log(newTrain.nextArrival);
	  console.log(newTrain.minutesUntilArrival);

	  // Alert
	  //alert("Train Info Added");

	  // Clears all of the text-boxes
	  $("#train-name-input").val("");
	  $("#destination-input").val("");
	  $("#next-arrival-input").val("");
	  $("#minutes-until-arrival-input").val("");

	});

	// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	  console.log(childSnapshot.val());

	  // Store everything into a variable.
	  var trainName = childSnapshot.val().name;
	  var destination = childSnapshot.val().destination;
	  var nextArrival = childSnapshot.val().nextArrival;
	  var minutesUntilArrival = childSnapshot.val().minutesUntilArrival;

	  // train Info
	  console.log(trainName);
	  console.log(destination);
	  console.log(nextArrival);
	  console.log(minutesUntilArrival);



	
	  // Add each train's data into the table
	  $("#train-info-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
	  nextArrival + "</td><td>" + minutesUntilArrival "</td></tr>");
	});
});

