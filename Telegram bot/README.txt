Step 1: Set Up Your Python Environment
1.1 Install Python and Pip
Make sure you have Python installed on your system:

sudo apt update
sudo apt install python3 python3-pip
1.2 Create a Python Virtual Environment
A virtual environment helps isolate your project dependencies:

sudo apt install python3-venv
mkdir pagepal
cd pagepal
python3 -m venv venv
source venv/bin/activate
1.3 Install Required Libraries
Inside the virtual environment, install the necessary packages:

pip install python-telegram-bot requests python-docx
python-telegram-bot: A library to interact with the Telegram Bot API.
requests: For making HTTP requests to book APIs.
python-docx: To generate and manage .docx files for the reading list.
Step 2: Register Your Bot on Telegram
Open Telegram and search for BotFather.
Use /newbot to create a new bot and get the API token.
Store the token securely.
Step 3: Code the Telegram Bot
3.1 Basic Bot Structure
Create a Python file pagepal_bot.py and add the code
Step 4: Explanation of Features
Basic Commands:

/start: Displays a welcome message.
/help: Lists all available commands with descriptions.
Book Search by Genre (/book):

The bot asks for the genre name, fetches book data, and sends a CSV file with book details like title, author, year, language, etc.
Uses mock data for demonstration; you can integrate Google Books API or OpenLibrary for real data.
Preview Link (/preview):

After typing a book name, the bot fetches and provides a preview link.
Reading List (/reading_list):

The bot offers three buttons:
Add a book: Adds a new book to the reading list.
Delete a book: Removes a book from the reading list.
View Reading List: Generates a .docx file with the list of books and their preview links.
Step 5: Running the Bot
Start the Bot:

python pagepal_bot.py
Interact via Telegram:

Open your bot on Telegram and start using commands like /start, /book, /preview, and /reading_list.
