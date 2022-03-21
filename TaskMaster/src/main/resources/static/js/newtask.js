document.getElementById("Save").addEventListener("click", function () {
					let NewTaskName = document.getElementById('NewTaskName').value;
					alert(NewTaskName)
					document.getElementById("NewForm").submit()
					let NewTaskDetails = document.getElementById('NewTaskDetails').value;
					alert(NewTaskDetails)
					//sessionStorage.setItem("NewTaskName",NewTaskName)
					//sessionStorage.setItem("NewTaskDetails",NewTaskDetails)
				
					document.getElementById("NewForm").submit()})