var express = require('express');
var bodyParser = require ('body-parser');

var {mongoose} = require('./db/mongoose.js');

var {Todo} = require('./model/todo');

var {User} = require ('./model/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{

     var todo = new Todo({
         text: req.body.text,
     });

     todo.save().then((doc) => {

        res.send(doc);

     }, (e) => {
        res.status(400).send(e);
     });
});

// Fetch Todos
app.get('/todos',(req,res) => {

    Todo.find().then((todos) =>{
        res.send({todos})
    }, (e) => {
        res.status.send(e);
    })
})

app.listen(3000, () => {

    console.log('started on port 3000');
});


module.exports= {app};