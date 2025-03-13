# First Person Shooter Game

This is a simple first-person shooter game implemented as a web application using Flask.

## Project Structure

- `app.py`: The main file to run the Flask app.
- `templates/index.html`: The HTML template for the game's main page.
- `static/game.js`: Contains the logic for the first-person shooter game.
- `static/style.css`: Styles the web app for a visually appealing interface.
- `requirements.txt`: Lists the needed Python packages to run the app.
- `static/images`: Contains image assets used in the game, such as textures or sprites.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install the requirements with `pip install -r requirements.txt`.

## Running the Application

To run the application, execute the following command:

```bash
python app.py
```

The app will be available at `http://0.0.0.0:5000`.

## Development Notes

- The Flask app is configured to run in debug mode for development purposes.
- Ensure that the `static/images` directory contains necessary image assets for the game.