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
- Change NODE_ENV to dev to run the project in the development mode.
- After adding all the credentials in the env file. Start the server using the command `npm start`    
- Now server is up and running on port 3000.


### How query is solved
- First iterating over csv file and create an array of countries
- structure of country = {
                        name: "",
                        native: "",
                        capital: "",
                        currency: "",
                        continent: "",
                        languages: "a, b"
                    }
**after populating the language in the country object** 
country  = {
                        name: "",
                        native: "",
                        cuurency: "",
                        continent: "",
                        language: [
                            {
                                code: a,
                                name: ""
                            },
                            {
                                code: b,
                                name: ""
                            }
                        ]
                    }

- after that the data is stored in the db.
- In this way for each query we can search for the record in the db
