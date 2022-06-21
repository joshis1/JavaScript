const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// use the IP address rather than localhost since there is some known issues.
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// options - useNewUrlParser: true
// either error exists or client exists in the parameters - pretty standard way in JS

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {

    if(error)
    {
        return console.log('Unable to connect to the database');
    }

    console.log('Mongodb connected');

    // In Mongodb we have collections instead of tables
    const db = client.db(databaseName);
    db.collection('users').insertOne({name: 'shreyas', age: 40});
})
