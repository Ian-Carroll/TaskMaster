// Global Page variables
let monthShift = 0;
let click = null;
let eventArrayLength = localStorage.getItem('arrayLength') ? parseInt(localStorage.getItem('arrayLength')) : 0;

var eventArray = [];
if (eventArrayLength !== 0)
{
	for (let i = 0; i < eventArrayLength; i++)
	{
		const eventName = localStorage.getItem('taskdata'+i+'name').toString();
		const eventDate = localStorage.getItem('taskdata'+i+'date').toString();
		console.log("Event Name: "+eventName);
		console.log("Event Date: "+eventDate);
		eventArray.push([eventName, eventDate]);
	}
}

let eventDateStrs = [];

for (let i = 0; i < eventArrayLength; i++)
{
	eventDateStrs.push(eventArray[i][1]);
}

let eventNameStrs = []

for (let i = 0; i < eventArrayLength; i++)
{
	eventNameStrs.push(eventArray[i][0]);
}


// Constants
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('monthYear');
const next = document.getElementById('next');
const back = document.getElementById('back');

// Update the calendar view
function updateCalendar()
{
	const date = new Date();	// Get the date as of opening the page
	console.log("Date: " + date);
	
	if (monthShift !== 0)
	{
		date.setMonth(new Date().getMonth() + monthShift);
	}
	
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	console.log("Y/M/D: "+year +"/"+ month+"/"+day);
	
	// Get days in the month
	// month+1 checks next month, 0 checks last day of previous month
	const daysInMonth = new Date(year, month+1, 0).getDate();
	console.log("Days in Month: " + daysInMonth);
	
	// Get first day of month and blank boxes
	const firstDayInMonth = new Date(year, month, 1);
	console.log("First day in Month: " + firstDayInMonth);
	
	// dateStr gets numeric dates with a string for weekday
	const dateStr = firstDayInMonth.toLocaleDateString('en-us', 
	{
		weekday: 'long',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
	console.log("Date String: "+dateStr);
	
	// Blank squares are at the start and end of calendar
	const numBlankSquares = weekdays.indexOf(dateStr.split(', ')[0]);
	console.log("Num Blank Boxes: "+numBlankSquares);
	
	const monthName = date.toLocaleDateString('en-us', 
	{
		month: 'long'
	});
	monthYear.innerText = `${monthName} ${year}`;
	
	calendar.innerHTML = '';	// Clear calendar on each update
	
	// Loop through and populate each day square
	for (let i = 1; i <= numBlankSquares + daysInMonth; i++)
	{
		const daySquare = document.createElement('div');
		daySquare.classList.add('daySquare');
		const dayStr = `${year}-0${month+1}-0${i-numBlankSquares}`.toString();
		
		if (i > numBlankSquares)
		{
			daySquare.innerText = i - numBlankSquares;
			
			let eventsOnDay = [];
			for (let j = 0; j < eventArrayLength; j++)
			{
				const string1 = String(dayStr);
				const string2 = String(eventDateStrs[j]);
				console.log(string1 == string2);
				console.log("String1: "+string1);
				console.log("String2: "+string2);
				
				if (string1 == string2)
				{
					eventsOnDay.push(eventArray[j]);
				}
			}
			
			if (eventsOnDay.length != 0)
			{
				for (let k = 0; k < eventsOnDay.length; k++)
				{
					const eventDiv = document.createElement('div');
		        	eventDiv.classList.add('event');
		        	eventDiv.innerText = eventsOnDay[k][0];
		        	daySquare.appendChild(eventDiv);
				}
			}
			
		}
		
		else
		{
			daySquare.classList.add('blankSquare');
		}
		
		calendar.appendChild(daySquare);
	}
}

// Add functionality to next and back buttons
// Shifting months
function buttonCheck()
{
	next.addEventListener('click', function()
	{
		monthShift = monthShift + 1;
		updateCalendar();
	});
	
	back.addEventListener('click', function()
	{
		monthShift = monthShift - 1;
		updateCalendar();
	});
}

buttonCheck();
updateCalendar();
