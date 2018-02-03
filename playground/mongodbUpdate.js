const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    } 
      console.log('Connected to Mongo DB Server');  

    //   db.collection('ToDos').findOneAndUpdate({
    //       _id:new ObjectID('5a753042fc2f1644d8b165bb')},{
    //           $set:{
    //               completed: true
    //           }
    //       },{
    //           returnOriginal: false
    //       }).then((result)=>{
    //           console.log(result)
    //       })


    // update by $inc operator

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a75cd0ed9dead2ac81e3b03')},{
            $inc:{
                age:1
            },$set:{
                name: "someName"
        },
        },{
            returnOriginal: false
        }).then((result) =>{
            console.log(result);
        })
      

  // db.close();s

});