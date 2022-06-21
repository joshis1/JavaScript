# Node js supports multiple database.
## SQL and No SQL database.

# No SQL database
* Mongodb is a no SQL database.
* Instead of table, we call it here collections.
* Row/record is called document in no sql.
* Document is nothing but a JSON
* Column is called fields in no sql

# Install mongodb 
* https://www.mongodb.com/try/download/community
* Mongodb community server
* download as a zip file rather than MSI
* Extract here in the /Users/Shreyas/mongodb
* Create a folder where the mongodb tables i.e. collections will be stored. E.g. mongodb-data

```
PS C:\Users\shrey> .\mongodb\bin\mongod.exe --dbpath=.\mongodb-data
```

The above will keep running on the port number - 27017 by default.

# Database GUI viewer.
```
Robo 3T studio
```

* Create a connection
* Give name - For e.g. LocalMongodbDatabase
* Address: LocalHost: 27017

# Check the connection
* open shell
```
db.version();

MongoDB shell version v4.2.14
admin
5.0.9

```

# Documentation to use Mongodb driver
* https://www.mongodb.com/docs/drivers/
* https://www.mongodb.com/docs/drivers/node/current/ 
* API Documentation - https://mongodb.github.io/node-mongodb-native/4.7/
* Usage Example - https://www.mongodb.com/docs/drivers/node/current/usage-examples/ 
* Fundamentals - https://www.mongodb.com/docs/drivers/node/current/fundamentals/

# Start the project 
```
npm init -y
```

# Install Mongodb driver 
```
npm i mongodb@3.1.10 
```

# CRUD operations with Mongodb
* C - Create
* R - Read 
* U - Update
* D - Delete

# Test just mongodb 
```
 node mongodb.js
```


![Mongodb Client Studio 3T](Studio_3T_MongoDB.png?raw=true "3 T Studio Mongodb client tool - visualizer")