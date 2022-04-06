// Setup of initial variables
var isCancelled = true;
var isPaused = false;

// Timing data from DTO
let sessionHours = document.getElementById('sessionTimeHrs');
let sessionMins = document.getElementById('sessionTimeMins');
let sessionSecs = document.getElementById('sessionTimeSecs');
let numBreaks = document.getElementById('numBreaks').value;
let breakLength = document.getElementById('breakLength').value;

// Config preset checkboxes
let isPomodoro = document.getElementById('isPomodoro').checked;
let isShortPeriod = document.getElementById('isShortPeriod').checked;
let isLongPeriod = document.getElementById('isLongPeriod').checked;

// Storage variables
let sessionHoursStorage = localStorage.getItem('sessionHours');
let sessionMinsStorage = localStorage.getItem('sessionMins');
let sessionSecsStorage = localStorage.getItem('sessionSecs');
let numBreaksStorage = localStorage.getItem('numBreaks');
let breakLengthStorage = localStorage.getItem('breakLength');
let isPomodoroStorage = (localStorage.getItem('isPomodoro') === 'true');
let isShortPeriodStorage = (localStorage.getItem('isShortPeriod') === 'true');
let isLongPeriodStorage = (localStorage.getItem('isLongPeriod') === 'true');

// Parse timing data in terms of seconds
var totalTime = parseInt(sessionSecs.value);
var totalTime = totalTime + 60*parseInt(sessionMins.value);
var totalTime = totalTime + 60*60*parseInt(sessionHours.value);

// intervalCount is the index of sequence
// ex. Pomodoro, countdownList[0][0] = 25 minutes (1500 s)
//				 countdownListp[1][0] = 5 minutes (300 s)
var intervalCount = 0;

// Page configures the countdown list on each refresh/load/GET request
var countdownList = [];

let referrer = document.referrer;
console.log(referrer);

if (referrer == "" || referrer == "http://localhost:8080/config_countdown")
{
	// If no presets are selected
	if (!isPomodoro && !isShortPeriod && !isLongPeriod)
	{
		if (numBreaks == 0 || breakLength == 0)
		{
			countdownList = [[totalTime, true]];	// Single interval countdown
		}
		
		else
		{
			// Work period is the total time minus break time, divided by
			// the number of breaks + 1
			var workPeriod = totalTime-(60*numBreaks*breakLength);
			workPeriod = workPeriod/(parseInt(numBreaks)+1);
			
			// Iterate through total sequence of countdowns
			for (let i = 0; i < (2*numBreaks+1); i++)
			{
				// insert work period on even index
				if (i % 2 == 0)
				{
					countdownList.push([workPeriod, true]);	// true is parsed later to read "Work"
				}
				
				else if (i % 2 == 1)
				{
					countdownList.push([breakLength*60, false]); // false is parsed later to read "Break" 
				}
			}
		}
	}
	
	// Handle all presets
	else if (isPomodoro)
	{
		countdownList.push([(25*60), true]);
		countdownList.push([(5*60), false]);
	}
	else if (isShortPeriod)
	{
		countdownList.push([(3600*1), true]);
		countdownList.push([(10*60), false]);
	}
	else
	{
		var longPeriodTime = (3*3600) + (30*60);
		var workPeriod = longPeriodTime-(60*3*10);
		workPeriod = workPeriod/(parseInt(3)+1);
		countdownList.push([workPeriod, true]);
		countdownList.push([10*60, false]);
	}
}

else
{	
	var totalTimeStorage = parseInt(sessionSecsStorage);
	var totalTimeStorage = totalTimeStorage + 60*parseInt(sessionMinsStorage);
	var totalTimeStorage = totalTimeStorage + 60*60*parseInt(sessionHoursStorage);
	// If no presets are selected
	if (!isPomodoroStorage && !isShortPeriodStorage && !isLongPeriodStorage)
	{
		if (numBreaksStorage == 0 || breakLengthStorage == 0)
		{
			countdownList = [[totalTimeStorage, true]];	// Single interval countdown
		}
		
		else
		{
			// Work period is the total time minus break time, divided by
			// the number of breaks + 1
			var workPeriod = totalTimeStorage-(60*numBreaksStorage*breakLengthStorage);
			workPeriod = workPeriod/(parseInt(numBreaksStorage)+1);
			
			// Iterate through total sequence of countdowns
			for (let i = 0; i < (2*numBreaksStorage+1); i++)
			{
				// insert work period on even index
				if (i % 2 == 0)
				{
					countdownList.push([workPeriod, true]);	// true is parsed later to read "Work"
				}
				
				else if (i % 2 == 1)
				{
					countdownList.push([breakLengthStorage*60, false]); // false is parsed later to read "Break" 
				}
			}
		}
	}
	
	// Handle all presets
	else if (isPomodoroStorage)
	{
		countdownList.push([(25*60), true]);
		countdownList.push([(5*60), false]);
	}
	else if (isShortPeriodStorage)
	{
		countdownList.push([(3600*1), true]);
		countdownList.push([(10*60), false]);
	}
	else
	{
		var longPeriodTime = (3*3600) + (30*60);
		var workPeriod = longPeriodTime-(60*3*10);
		workPeriod = workPeriod/(parseInt(3)+1);
		countdownList.push([workPeriod, true]);
		countdownList.push([10*60, false]);
	}
	
	sessionHours.value = sessionHoursStorage;
	sessionMins.value = sessionMinsStorage;
	sessionSecs.value = sessionSecsStorage;
	numBreaks = numBreaksStorage;
	breakLength = breakLengthStorage;
	isPomodoro = isPomodoroStorage;
	isShortPeriod = isShortPeriodStorage;
	isLongPeriod = isLongPeriodStorage;
}

var initialTime = countdownList[0][0];

// Convert initial time from seconds to HH MM SS
let hours   = Math.floor(initialTime/ 3600);
let minutes = Math.floor((initialTime - (hours * 3600)) / 60);
let seconds = initialTime - (hours * 3600) - (minutes * 60);
document.getElementById("timeText").innerHTML = hours + "H " + minutes + "M " + seconds + "S";

// Store data in the local storage if navigating to another page
document.getElementById('calendar').addEventListener('click', function()
{
	localStorage.setItem('sessionHours', sessionHours.value);
	localStorage.setItem('sessionMins', sessionMins.value);
	localStorage.setItem('sessionSecs', sessionSecs.value);
	localStorage.setItem('numBreaks', numBreaks);
	localStorage.setItem('breakLength', breakLength);
	localStorage.setItem('isPomodoro', isPomodoro);
	localStorage.setItem('isShortPeriod', isShortPeriod);
	localStorage.setItem('isLongPeriod', isLongPeriod);
});

document.getElementById('countdown').addEventListener('click', function()
{
	localStorage.setItem('sessionHours', sessionHours.value);
	localStorage.setItem('sessionMins', sessionMins.value);
	localStorage.setItem('sessionSecs', sessionSecs.value);
	localStorage.setItem('numBreaks', numBreaks);
	localStorage.setItem('breakLength', breakLength);
	localStorage.setItem('isPomodoro', isPomodoro);
	localStorage.setItem('isShortPeriod', isShortPeriod);
	localStorage.setItem('isLongPeriod', isLongPeriod);
});

document.getElementById('todo').addEventListener('click', function()
{
	localStorage.setItem('sessionHours', sessionHours.value);
	localStorage.setItem('sessionMins', sessionMins.value);
	localStorage.setItem('sessionSecs', sessionSecs.value);
	localStorage.setItem('numBreaks', numBreaks);
	localStorage.setItem('breakLength', breakLength);
	localStorage.setItem('isPomodoro', isPomodoro);
	localStorage.setItem('isShortPeriod', isShortPeriod);
	localStorage.setItem('isLongPeriod', isLongPeriod);
});

// Handle start button click
document.getElementById('start').addEventListener('click', function()
{
	isPaused = false;
	isCancelled = false;
	
	var timePassed = 0;
	var intervalTime = countdownList[intervalCount][0];
	
	if (intervalTime > 0)
	{
		// Hide startGroup and show pauseGroup
		document.getElementById('startGroup').style.display = "none";
		document.getElementById('pauseGroup').style.display = "contents";
		
		var oldPercentFill = 100;
		
		// Timer handles the countdown
		const timer = setInterval(function()
		{
			// Display Work to the user if on working interval
			if (countdownList[intervalCount][1] == true)
			{
				document.getElementById('work').style.display = "contents";
				document.getElementById('break').style.display = "none";
			}
			
			// Otherwise display Break
			else
			{
				document.getElementById('break').style.display = "contents";
				document.getElementById('work').style.display = "none";
			}
			
			// Upon cancel being clicked, clear the count, and update display
			// back to initial values, then clear the timer
			if (isCancelled)
			{
				intervalCount = 0;
				var startIntervalTime = countdownList[intervalCount][0];
				document.getElementById('resumeGroup').style.display = "none";
				document.getElementById('pauseGroup').style.display = "none";
				document.getElementById('startGroup').style.display = "contents";
				let hours   = Math.floor(startIntervalTime/ 3600);
		    	let minutes = Math.floor((startIntervalTime - (hours * 3600)) / 60);
		    	let seconds = startIntervalTime - (hours * 3600) - (minutes * 60);
		    	document.getElementById("progressbar").style = "width: " + 100 + "%; height: 2rem;";
				document.getElementById("progressbar").innerHTML = 100 + "%";
		  		document.getElementById("timeText").innerHTML = hours + "H " + minutes + "M " + seconds + "S";
		  		clearInterval(timer);
			}
			
			else if (!isPaused)
			{
				// Operate timer as normal while still within the interval
				if (!(timePassed >= intervalTime))
				{
					// Update percent fill, increment time, compute time left and percent left
					oldPercentFill = newPercentFill;
					timePassed = timePassed + 1;
					var distance = (intervalTime - timePassed);
					var newPercentFill = ((intervalTime - timePassed)/intervalTime) * 100;
					document.getElementById("progressbar").style = "width: " + newPercentFill + "%; height: 2rem;";
					document.getElementById("progressbar").innerHTML = parseInt(newPercentFill) + "%";
					let hours   = Math.floor(distance/ 3600);
			    	let minutes = Math.floor((distance - (hours * 3600)) / 60);
			    	let seconds = distance - (hours * 3600) - (minutes * 60);
			  		
			  		document.getElementById("timeText").innerHTML = hours + "H " + minutes + "M " + seconds + "S";
				}
				
				// End of the current interval has been hit
				else if (intervalTime - timePassed == 0)
				{
					intervalCount = intervalCount + 1;
					
					// If another interval still exists in the countdownList
					// update the view to let the user start the next interval
					if (intervalCount < countdownList.length)
					{
						var nextIntervalTime = countdownList[intervalCount][0];
						
						document.getElementById('resumeGroup').style.display = "none";
						document.getElementById('pauseGroup').style.display = "none";
						document.getElementById('startGroup').style.display = "contents";
						
						let hours   = Math.floor(nextIntervalTime/ 3600); // get hours
				    	let minutes = Math.floor((nextIntervalTime - (hours * 3600)) / 60); // get minutes
				    	let seconds = nextIntervalTime - (hours * 3600) - (minutes * 60);
				    	
				  		document.getElementById("progressbar").style = "width: " + 100 + "%; height: 2rem;";
						document.getElementById("progressbar").innerHTML = 100 + "%";
				  		document.getElementById("timeText").innerHTML = hours + "H " + minutes + "M " + seconds + "S";
				  		
				  		if (intervalCount % 2 == 0)
				  		{
							document.getElementById('work').style.display = "contents";
							document.getElementById('break').style.display = "none";
						}
						
						else
						{
							document.getElementById('break').style.display = "contents";
							document.getElementById('work').style.display = "none";
						}
						
				  		clearInterval(timer);
					}
					
					// If no interval exists after this one
					// Reset back to initial time of the first interval
					else
					{
						intervalCount = 0;
						var startIntervalTime = countdownList[intervalCount][0];
						
						document.getElementById('resumeGroup').style.display = "none";
						document.getElementById('pauseGroup').style.display = "none";
						document.getElementById('startGroup').style.display = "contents";
						
						let hours   = Math.floor(startIntervalTime/ 3600); // get hours
				    	let minutes = Math.floor((startIntervalTime - (hours * 3600)) / 60); // get minutes
				    	let seconds = startIntervalTime - (hours * 3600) - (minutes * 60);
				    	
				    	document.getElementById("progressbar").style = "width: " + 100 + "%; height: 2rem;";
						document.getElementById("progressbar").innerHTML = 100 + "%";
				  		document.getElementById("timeText").innerHTML = hours + "H " + minutes + "M " + seconds + "S";
				  		document.getElementById('work').style.display = "contents";
						document.getElementById('break').style.display = "none";
						
				  		clearInterval(timer);
					}
				}
			}
		}, 1000);
	}
});

// If the pause button is clicked, hide the pauseGroup, show resumeGroup, toggle isPaused
document.getElementById('pause').addEventListener('click', function()
{
	document.getElementById('pauseGroup').style.display = "none";
	document.getElementById('resumeGroup').style.display = "contents";
	isPaused = !isPaused;
});

// If the cancelP button is clicked, hide the pauseGroup, show startGroup, toggle isCancelled
document.getElementById('cancelP').addEventListener('click', function()
{
	document.getElementById('pauseGroup').style.display = "none";
	document.getElementById('startGroup').style.display = "contents";
	isCancelled = !isCancelled;
});

// If the resume button is clicked, hide the resumeGroup, show pauseGroup, toggle isPaused
document.getElementById('resume').addEventListener('click', function()
{
	document.getElementById('resumeGroup').style.display = "none";
	document.getElementById('pauseGroup').style.display = "contents";
	isPaused = !isPaused;
});

// If the cancelR button is clicked, hide the resumeGroup, show startGroup, toggle isCancelled
document.getElementById('cancelR').addEventListener('click', function()
{
	document.getElementById('resumeGroup').style.display = "none";
	document.getElementById('startGroup').style.display = "contents";
	isCancelled = !isCancelled;
});
