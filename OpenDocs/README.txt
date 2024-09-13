
1. Cloning the Repository
First, we need to clone the Django Todo List repository from GitHub. This will copy the project's files onto your local machine.

Open a terminal in Ubuntu.
Use the following command to clone the repository:

git clone https://github.com/bradtraversy/django-todolist.git
After cloning, navigate to the project directory:

cd django-todolist
2. Setting Up a Virtual Environment
A virtual environment isolates your project dependencies from the system's global Python packages, ensuring your project runs with the specific dependencies it needs.

Install the virtualenv package if you haven't already:

sudo apt install python3-venv
Create a new virtual environment named env:

python3 -m venv env
Activate the virtual environment:

source env/bin/activate
After this, you should see (env) appear at the beginning of your terminal prompt, indicating the virtual environment is active.
3. Installing Dependencies
The project has a list of required Python packages that are mentioned in the requirements.txt file. You’ll use pip (Python’s package installer) to install them.

Inside the virtual environment, install the dependencies with:

pip install -r requirements.txt
4. Applying Migrations
Django uses migrations to set up and manage the database schema. Before you can use the application, you need to apply these migrations to create the necessary database tables.

Run the following command to apply migrations:

python manage.py migrate
This will create the required database tables for the app.
5. Running the Development Server
Now, everything is set up, and you can start the Django development server to run the application locally.

Start the server with:

python manage.py runserver
Open your browser and navigate to http://127.0.0.1:8000/. You should see the Django Todo List app up and running.
Breakdown:
Starting the Development Server: When you ran the command python manage.py runserver, Django started a web server on your local computer. This server listens for incoming requests, such as when you open a web page.

Localhost (127.0.0.1):

127.0.0.1 or localhost refers to your local machine. This address is used to indicate that you're accessing something running directly on your own computer, not on the internet.
The number 8000 is the port number that Django uses by default when it starts its development server.
Opening a Web Browser: When you enter the URL http://127.0.0.1:8000/ in your web browser, you're sending a request to the Django server running on your machine. The browser will display the web page served by Django. Since you've set up and started the Django Todo List application, this page should show the interface of the app, allowing you to interact with it (like creating tasks, viewing lists, etc.).

In simpler terms:
Django is running a small web server on your computer.
By visiting http://127.0.0.1:8000/ in a browser, you're opening the app to see and interact with it just like you would with any other website, but this one is running locally instead of on the internet.
6. Usage
Once the application is running, you can use the following features directly from the browser:

Create Task: Navigate to the task creation page, enter the task name, and submit to add a new task to your list.
Update Task: Click on any task to edit its details, such as its name or status (completed/pending).
Delete Task: Remove tasks from the list using the delete button next to each task.
View Tasks: The main page will show the list of all tasks, along with their status (completed or pending).
7. Stopping the Server
To stop the server, press Ctrl + C in the terminal where the server is running.

8. Contributing to the Project
If you'd like to contribute to the project, here's how you can do it:

Reporting Issues: If you find any bugs or issues, go to the GitHub repository, click on the "Issues" tab, and report the problem with a detailed description.

Submitting Pull Requests:

Fork the Repository: Click the "Fork" button on the GitHub repository to create a copy of the project in your own GitHub account.
Make Changes: Clone your forked repository to your local machine, make your changes, and push the updates to your fork.
Submit a Pull Request: Once you’ve made changes, go to the original repository and click "New Pull Request" to propose your changes.
Conclusion
This Django Todo List project is a great way to practice basic Django skills such as creating a virtual environment, installing dependencies, setting up migrations, and working with the Django admin panel. You can expand on the app by adding more features or customizing the existing ones, and by contributing to the project, you can collaborate with other developers.
