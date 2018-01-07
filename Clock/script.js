window.addEventListener('load',function(){
	hoursDisplay = document.getElementById('hours');
	minutesDisplay = document.getElementById('minutes');
	secondsDisplay = document.getElementById('seconds');

	// Call function every 100 milliseconds.
	setInterval(updateClock,100);
},false);

function updateClock(){
	//Initiate the Date object
	var date  = new Date();
	//Get Current Hours
	var hours = date.getHours();
	//Get Current Minutes
	var minutes = date.getMinutes();
	//get Current Seconds
	var seconds = date.getSeconds();

	if(hours < 10)
		hoursDisplay.innerHTML = "0"+hours+" : ";
	else
		hoursDisplay.innerHTML = hours+" : ";

	if(minutes < 10)
		minutesDisplay.innerHTML = "0"+minutes+" : ";
	else
		minutesDisplay.innerHTML = minutes+" : ";

	if(seconds < 10)
		secondsDisplay.innerHTML = "0"+seconds;
	else
		secondsDisplay.innerHTML = seconds;
}