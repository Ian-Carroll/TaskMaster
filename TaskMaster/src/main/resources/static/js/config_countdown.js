// Make all forms readonly
function setFormsReadOnly()
{
	document.getElementById("sessionTimeHrs").setAttribute("readonly", "true");
	document.getElementById("sessionTimeMins").setAttribute("readonly", "true");
	document.getElementById("numBreaks").setAttribute("readonly", "true");
	document.getElementById("breakLength").setAttribute("readonly", "true");
}

// Set input forms back to enable writing
function setFormsWrite()
{
	document.getElementById("sessionTimeHrs").removeAttribute("readonly");
	document.getElementById("sessionTimeMins").removeAttribute("readonly");
	document.getElementById("numBreaks").removeAttribute("readonly");
	document.getElementById("breakLength").removeAttribute("readonly");
}

// Set all input forms to 0
function clearAllInputs()
{
	document.getElementById('sessionTimeHrs').value = 0;
	document.getElementById('sessionTimeMins').value = 0;
	document.getElementById('numBreaks').value = 0;
	document.getElementById('breakLength').value = 0;
}

// On startup, make sure boxes are readonly 0's if a preset is selected
var isPomodoro = document.getElementById('isPomodoro').checked;
var isShortPeriod = document.getElementById('isShortPeriod').checked;
var isLongPeriod = document.getElementById('isLongPeriod').checked;

if (isPomodoro || isShortPeriod || isLongPeriod)
{
	clearAllInputs();
	setFormsReadOnly();
}

// If the Pomodoro checkbox gets clicked
document.getElementById('isPomodoro').addEventListener('click', function()
{
	// If the checkbox is checked, set all forms to readonly
	if (document.getElementById('isPomodoro').checked == true)
	{
		setFormsReadOnly();
	}
	// Otherwise enable writing to inputs
	else
	{
		setFormsWrite();
	}
	
	// Clear the other preset default checkboxes
	document.getElementById('isShortPeriod').checked = false;
	document.getElementById('isLongPeriod').checked = false;
	
	clearAllInputs();
})

// If the ShortPeriod checkbox gets clicked
document.getElementById('isShortPeriod').addEventListener('click', function()
{
	// If the checkbox is checked, set all forms to readonly
	if (document.getElementById('isShortPeriod').checked == true)
	{
		setFormsReadOnly();
	}
	// Otherwise enable writing to inputs
	else
	{
		setFormsWrite();
	}
	
	// Clear the other preset default checkboxes
	document.getElementById('isPomodoro').checked = false;
	document.getElementById('isLongPeriod').checked = false;
	
	clearAllInputs();
})

// If the LongPeriod checkbox gets clicked
document.getElementById('isLongPeriod').addEventListener('click', function()
{
	// If the checkbox is checked, set all forms to readonly
	if (document.getElementById('isLongPeriod').checked == true)
	{
		setFormsReadOnly();
	}
	// Otherwise enable writing to inputs
	else
	{
		setFormsWrite();
	}
	
	// Clear the other preset default checkboxes
	document.getElementById('isPomodoro').checked = false;
	document.getElementById('isShortPeriod').checked = false;
	
	clearAllInputs();
});
