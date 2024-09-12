Step 1: Set Up Your Environment
1.1 Create a Python Virtual Environment
A virtual environment helps to keep your project’s dependencies separate from other projects. Here’s how to create and use one:

Open the Terminal: Press Ctrl + Alt + T to open a terminal window.

Install venv (if not already installed):

Type the following command and press Enter:

sudo apt-get install python3-venv

Navigate to your project folder:

Use the cd command to move to the folder where you want to create your project. For example:

cd ~/my_projects

Create a virtual environment:

Run the following command:

python3 -m venv myenv
This creates a new folder named myenv in your project directory.
Activate the virtual environment:

Run:

source myenv/bin/activate
You should see (myenv) at the beginning of your terminal prompt, indicating that the virtual environment is active.
Install Required Modules:

Now, install the necessary Python libraries:

pip install click subliminal babelfish requests moviepy beautifulsoup4

Step 2: Create the CLI Interface with Click
A CLI (Command-Line Interface) allows users to interact with your application via commands typed into the terminal.

Install Click (already installed if you followed Step 1):

Click is used for creating command-line interfaces.
Create a Python script for the CLI:

Use a text editor to create a new Python file. For example, open nano:
bash
Copy code
nano subtitle_finder.py
Write the CLI code

Save and exit:

In nano, press Ctrl + X, then Y to confirm saving, and Enter to exit.
Step 3: Find IMDb ID and Hash/File Size
You’ll need to find the IMDb ID of the movie, and optionally the hash and file size, to search for subtitles effectively.

Finding IMDb ID:

You may need an external tool or service to get the IMDb ID from the movie’s filename. This typically involves querying an online database.
Getting File Size and Hash:

File Size:
python

def get_file_size(file_path):
    return os.path.getsize(file_path)
Hash:

python

def get_file_hash(file_path):
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()
Step 4: Scrape Subtitles
To find subtitles online, you’ll need to scrape data from subtitle websites.

Install BeautifulSoup (if not already installed):

pip install beautifulsoup4
Write the scraping code:

Open your Python script file (subtitle_finder.py) and add the code

Step 5: Download Subtitles
Once you have the subtitles listed, you’ll need to allow users to download their chosen subtitle.

Write the download code:
Add this function to your script:

python
Copy code
def download_subtitle(subtitle, output_folder):
    response = requests.get(subtitle['download_link'])
    output_file = os.path.join(output_folder, f"{subtitle['title']}.srt")
    with open(output_file, 'wb') as file:
        file.write(response.content)
    print(f"Downloaded: {output_file}")
Step 6: Batch Mode
For batch processing multiple files, you need to handle a directory of videos.

Process Multiple Files:
Add the following code to handle batch mode:

python
Copy code
import glob

def process_directory(directory, language, output, file_size, match_by_hash):
    for file in glob.glob(os.path.join(directory, '*.mp4')):
        process_file(file, language, output, file_size, match_by_hash)
Step 7: User Interface and Validation
Clean User Interface:

Make sure your CLI displays clear messages, such as “Processing file…” or “Downloading subtitles…”.
Validation:

Test your tool with various MP4 files to ensure it works correctly. Check that subtitle extraction, downloading, and batch processing function as expected.
Running Your CLI Tool
Run Your Script:

To run the CLI tool, use the terminal and execute:
bash
Copy code
python subtitle_finder.py your_video.mp4 --language eng --output ./subtitles
For Batch Mode:

Use:
bash
Copy code
python subtitle_finder.py --batch-download /path/to/your/videos --language eng --output ./subtitles

