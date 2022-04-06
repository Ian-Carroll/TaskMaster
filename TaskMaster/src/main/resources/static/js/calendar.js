// Global Page variables
let monthShift = 0;
let click = null;

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
		
		if (i > numBlankSquares)
		{
			daySquare.innerText = i - numBlankSquares;
			
			daySquare.addEventListener('click', () => console.log('click'));
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
