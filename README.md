# YelpCamp
This is a basic full-stack application concerning web development basics. Yelpcamp allows user to create and comment different campgrounds. Users can *Sign Up* and use that account to create their desired campground (specifying the required fields) or comment on existing campgrounds. 

To check out the demo, click [here](https://sleepy-reef-11207.herokuapp.com) (create your own account and feel free to add anything).

The application was developed using: Node.js, Express, MongoDB, and Bootstrap. As well as Passport.js to handle authentication.

## Features
* Campgrounds and reviews are freely accesible without signing up or logging in.
* Campground/Comment creating or editing can only be done once logged in.
* Authentication restricts user actions to only elements created by user.
* Data is persistent, stored in its own cloud database.

## Running it locally
> Current code is set for deployment, to run locally: uncomment this [line](https://github.com/RVS97/YelpCamp/blob/master/app.js#L18) and comment the one [beneath](https://github.com/RVS97/YelpCamp/blob/master/app.js#L19)

To run it locally:
1. Install [MongoDB](https://www.mongodb.com/)
2. Move into the directory and run *mongod* to start the mongo daemon (if you have permission issues make sure to make accesible with *chmod +x*)
```
cd YelpCamp
./mongod
```
3. Install libraries and run application
```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in the browser to see the running application.

## Landing Page
![Landing](https://github.com/RVS97/YelpCamp/blob/master/Landing.PNG)

> This project is developed as part of the web development course, [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)
