const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    } 
      console.log('Connected to Mongo DB Server');  

   // delete many

    // db.collection('ToDos').deleteMany({text: 'Eat Lunch'}).then((result) => {

    //     console.log(result);
    // });


   // delete one

    // db.collection('ToDos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // }) 
   //findOne and delete

//    db.collection('ToDos').findOneAndDelete({completed:false}).then((result)=> {

//         console.log(result)
//    })


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a7534522d14cb3e80df10a4')
    }).then((result) => {

        console.log(result)
    });

  // db.close();s

});