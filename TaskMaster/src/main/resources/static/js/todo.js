let referrer = document.referrer;
console.log(referrer);
const tasks = document.querySelectorAll("div[id*='taskdata']");
console.log(tasks.length);
if (referrer != "http://localhost:8080/todo/newtask")
{
	for (let i = 0; i < tasks.length; i++)
	{
		const taskdata = document.getElementById('taskdata'+i).children;
		taskdata[0].value = localStorage.getItem('taskdata'+i+'name');
		taskdata[1].value = localStorage.getItem('taskdata'+i+'comment');
		taskdata[2].value = localStorage.getItem('taskdata'+i+'priority');
		taskdata[3].value = localStorage.getItem('taskdata'+i+'date');
		const taskdisplay = document.getElementById('taskdisplay'+i).children;
		taskdisplay[0].innerHTML = taskdata[0].value;
		taskdisplay[1].innerHTML = taskdata[1].value;
		taskdisplay[2].innerHTML = taskdata[2].value;
		taskdisplay[3].innerHTML = taskdata[3].value;
	}
}

var taskdataArray = [];
for (let i = 0; i < tasks.length; i++)
{
	const taskdata = document.getElementById('taskdata'+i).children;
	const name = taskdata[0].value;
	const comment = taskdata[1].value;
	const priority = taskdata[2].value;
	const date = taskdata[3].value;
	if (name !== "")
	{
		taskdataArray.push([name, comment, priority, date]);
	}
	console.log(name+" "+comment+" "+priority+" "+date);
}



document.getElementById('calendar').addEventListener('click', function()
{
	for (let i = 0; i < taskdataArray.length; i++)
	{
		var arrayLength = taskdataArray.length;
		localStorage.setItem('arrayLength', arrayLength);
		localStorage.setItem('taskdata'+i+'name', taskdataArray[i][0]);
		localStorage.setItem('taskdata'+i+'comment', taskdataArray[i][1]);
		localStorage.setItem('taskdata'+i+'priority', taskdataArray[i][2]);
		localStorage.setItem('taskdata'+i+'date', taskdataArray[i][3]);
	}
});

document.getElementById('countdown').addEventListener('click', function()
{
	for (let i = 0; i < taskdataArray.length; i++)
	{
		var arrayLength = taskdataArray.length;
		localStorage.setItem('arrayLength', arrayLength);
		localStorage.setItem('taskdata'+i+'name', taskdataArray[i][0]);
		localStorage.setItem('taskdata'+i+'comment', taskdataArray[i][1]);
		localStorage.setItem('taskdata'+i+'priority', taskdataArray[i][2]);
		localStorage.setItem('taskdata'+i+'date', taskdataArray[i][3]);
	}
});

document.getElementById('todo').addEventListener('click', function()
{
	for (let i = 0; i < taskdataArray.length; i++)
	{
		var arrayLength = taskdataArray.length;
		localStorage.setItem('arrayLength', arrayLength);
		localStorage.setItem('taskdata'+i+'name', taskdataArray[i][0]);
		localStorage.setItem('taskdata'+i+'comment', taskdataArray[i][1]);
		localStorage.setItem('taskdata'+i+'priority', taskdataArray[i][2]);
		localStorage.setItem('taskdata'+i+'date', taskdataArray[i][3]);
	}
});