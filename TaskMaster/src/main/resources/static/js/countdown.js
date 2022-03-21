// Need to make a function which handles the time
alert(sessionStorage.getItem('isPomodoro'))
// If the start button is clicked, hide the startGroup and show the pauseGroup
document.getElementById('start').addEventListener('click', function()
{
	document.getElementById('startGroup').style.display = "none"
	document.getElementById('pauseGroup').style.display = "contents"
})

// If the pause button is clicked, hide the pauseGroup and show the resumeGroup
document.getElementById('pause').addEventListener('click', function()
{
	document.getElementById('pauseGroup').style.display = "none"
	document.getElementById('resumeGroup').style.display = "contents"
})

// If the cancelP button is clicked, hide the pauseGroup and show the startGroup
document.getElementById('cancelP').addEventListener('click', function()
{
	document.getElementById('pauseGroup').style.display = "none"
	document.getElementById('startGroup').style.display = "contents"
})

// If the resume button is clicked, hide the resumeGroup and show the pauseGroup
document.getElementById('resume').addEventListener('click', function()
{
	document.getElementById('resumeGroup').style.display = "none"
	document.getElementById('pauseGroup').style.display = "contents"
})

// If the cancelR button is clicked, hide the resumeGroup and show the startGroup
document.getElementById('cancelR').addEventListener('click', function()
{
	document.getElementById('resumeGroup').style.display = "none"
	document.getElementById('startGroup').style.display = "contents"
})