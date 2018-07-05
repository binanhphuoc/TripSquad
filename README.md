# TripSquad App



## Requirements
node >=v8.x

npm >=6.1.x

## To Start the app

Make sure you have MongoDB running

Run `npm install` to install dependencies

Run `npm start`   to start express server on "localhost:4000"

Open another terminal `npm run-script build` to run the app locally on "localhost:3000"

## Note

To add new user access "http://localhost:3000/register"

the `src` folder contains code for Frontend (ReactJS) (`node_modules` and `public` are part of React App)

`app.js` file, `bin` and `routes` folder contain code for Backend (Mongo database and Express routing)  

`models` file contains database schemas and functions

`config` file contains configuration for PassportJS (Authentication middleware)

## Configure Dev/Prod/Test Environment

The app use dotenv to configure dev environment

Create an `env` file then copy data from `.env.template`, fill out the values in .env to configure your environment.

### For Localhost
```
DB_ENV_VAR = mongodb://localhost/TripSquad
HOST = localhost
```
### For DevServer
```
DB_ENV_VAR = mongodb://localhost/TripSquad
HOST =
```
