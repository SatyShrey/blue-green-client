Frontend for fetching blue-green pricing api
=============================================
Objective:
- To fetch an API with end point "/pricing" and display the response data. 

Features:
- It sends a GET request on page load and display the response data i.e. price of the plan, features, and plan name.
- If the plan name is "Standard Blue" it change the background color to blue and if "Standard Green" chage the background color to green

Technologies used:
HTML, CSS, JavaScript, React, Tailwind CSS.

How to run project in local machine:
- open the project root folder in code editor (ex. vscode)
- 1st command: "npm install" (for first time, internet connection needed)
- 2nd command: "npm run dev" (to start the app)
- Start the backend server before starting the frontend (recommeneded)
- repo for backend server code "https://github.com/SatyShrey/blue-green-server"

 Testing Tips
- Use both normal and private tab with or without cookies for different results
- Change the cookie value manually by inspecting web page.
- For random response try refreshing the page again and again. Most of the time it will receive blue plan.(it works when all the defined routing methods are false)

##################################################################
