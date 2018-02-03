//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    } 
      console.log('Connected to Mongo DB Server');  

    //   db.collection('ToDos').find({
    //     _id: new ObjectID("5a75c7c1d9dead2ac81e399e")

    //   }).toArray().then((docs) => {
    //     console.log('ToDos');
    //     console.log(JSON.stringify(docs,undefined,2))

    //   },(err) => {
    //       console.log("unable to find todos", err)
    //   });


    // db.collection('ToDos').find({
        
    //   }).count().then((count) => {
    //     console.log(`ToDos Count: ${count}`);
    //    // console.log(JSON.stringify(docs,undefined,2))

    //   },(err) => {
    //       console.log("unable to find todos", err)
    //   });

   
    // //db.close();


    db.collection('Users').find({location: 'San Antonio'}).toArray().then((docs) => {
        console.log('ToDos');
        console.log(JSON.stringify(docs,undefined,2))

      },(err) => {
          console.log("unable to find todos", err)
      });

});