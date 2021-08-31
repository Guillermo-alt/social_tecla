# Red social -  "Social Tecla"
Author: Guillermo Ortega Vargas

# Usage
* Clone Repo ``

# Setup MS Sql server
* setup username and password
* create an empty database e.g.
``` social_tecla ``` or execute `test.sql in management database to create database`
* save these to a .env file, as next described


* example of .env file:
```
HOST= 'localhost'
PORT = 3000

DB_USER = 'user'
DB_PASS = 'pass'
DB_NAME = 'social_tecla'
DIALECT = 'mssql'

SECRET_KEY = 'MySecretKey.'

WHITE_LIST = ['http://127.0.0.1:8080', 'http://127.0.0.1:3000']
```

# Start Back and front server
* execute `npm install`
* execute `configure the file .env`
* execute `test.sql in management data base`
* execute `npm run dev`
* Go to a web browser and navigate to ```http://$HOST:$PORT```
* Start having fun with virtual store
