# Handwriting

### Overview
Handwriting is a simple web app that uses machine learning to identify what number is drawn on a canvas.

### Tech Stack
* React
* Flask
* SciKit Learn

### Startup
* Clone the repo from https://github.com/daleighan/Handwriting.git.
* Install node if it is not already installed.
* To install all node modules, run npm install.
* Install python3 if it is not already installed.
* Install pip if it is not already installed.
* To install python dependencies, run sudo pip install -r requirements.txt
* Run sudo pip install sklearn.
* Run sudo pip install Pillow.
* Run npm run compile will bundle the react file.
* Run npm start will start the flask server.
* Go to http://127.0.0.1:5000/ to open the web app.

### Demo
* The page is not hosted anywhere yet, but will be hosted on heroku in the future

### REST API routes
* a post to /api/predict with b64 encoded PNG image in the JSON body will return a prediction of what the number in the image is

### Developers
* Alex Leigh (sole proprieter)
