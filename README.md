# Red social -  "Social Tecla"
Author: Guillermo Ortega

# Usage
* Clone Repo ``

# Setup MS Sql server
* setup username and password
* create an empty database e.g.
``` budget_system ``` or execute `test.sql in management database to create database`
* save these to a .env file, as next described

# Set up your .env file with environmental variables
*  setup ``` HOST ```, ```PORT```, ```DB_USER```, ```DB_PASS```, ``` DB_NAME ```, ``` DIALECT ```, ``` SECRET_KEY ```, ``` WHITE_LIST ``` environmental variables
* example of .env file:

```
HOST= 'localhost'
PORT = 3000

DB_USER = 'user'
DB_PASS = 'pass'
DB_NAME = 'budget_system'
DIALECT = 'mssql'

SECRET_KEY = 'MyRandomSecretKey587541*'

WHITE_LIST = ['http://127.0.0.1:8080', 'http://127.0.0.1:3000']
```

# Start Back and front server
* execute `npm install`
* execute `configure the file .env`
* execute `test.sql in management data base`
* execute `npm run dev`
* Go to a web browser and navigate to ```http://$HOST:$PORT```
* Start having fun with virtual store
