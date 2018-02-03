const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    } 
      console.log('Connected to Mongo DB Server');  

    //   db.collection('ToDos').insertOne({
    //       text: 'Do Something',
    //       completed: 'false'

    //   }, (err, result) =>{

    //     if(err){
    //         return console.log('could not insert data');
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));

    //   });

    db.collection('Users').insertOne({

        name: 'Ishani Prasad',
        age: '11',
        location: 'San Antonio',
        _id: 121

    }, (err, result) =>{
        if (err) {
            return console.log('unable to log data');
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();
});