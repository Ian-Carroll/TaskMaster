# TaskMaster
The TaskMaster Web Application is designed to boost the productivity and efficiency of students/workers alike, allowing the user to create specific work intervals and create a to-do list to manage tasks.

## Design
Here is a brief glimpse of what we have developed so far for the front-end of TaskMaster:

This is the countdown page, currently acting as the landing page:

<p align="center">
<img width="700" alt="countdown_page" src="https://user-images.githubusercontent.com/67641046/159354342-0041e0c0-b700-48d1-9100-54de01c14ac5.png">
</p>

Next is the todo page, where a user can prioritize their tasks:

<p align="center">
<img width="700" alt="todo_page" src="https://user-images.githubusercontent.com/67641046/159354773-28f1fe98-3f32-4ecb-a0bd-5095df099672.png">
</p>

## Setup
It is highly recommended to use the Spring Tool Suite 4 IDE (found here: https://spring.io/tools), as this allows for the application to build seamlessly. Before that can be done, a MySQL database must be created/configured via the following link: https://dev.mysql.com/downloads/installer/.

Once the MySQL database is configured, head over to the application.properties file located at "...\TaskMaster\TaskMaster\src\main\resources\application.properties", and change the password to what was configured in the MySQL database as indicated by the yellow arrow in the image below.

![application_properties](https://user-images.githubusercontent.com/67641046/159356252-0f1df8f9-b411-49e8-91bb-a1703905a71e.png)
