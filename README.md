## Getting Started
- Make sure you have `node` and `postgresql` installed in your system if not download the same from the official website.
- Clone this repo by using command `git clone` in the terminal
- After cloning go the root dir of the project and type `npm install` to install all the project dependencies.
- Create a `.env` file in the path `rootDir/.env`


### Structure of .env file
```
NODE_ENV=prod

DEV_USER=
DEV_PASS=
DEV_PORT=
DEV_HOST=
DEV_DBNAME=

PROD_USER=
PROD_PASS=
PROD_PORT=
PROD_HOST=
PROD_DBNAME=
```
- Change NODE_ENV to dev to run the project in the development mode
- After adding all the credentials in the env file. Start the server using the command `npm start`    
- Now server is up and running on port 3000.