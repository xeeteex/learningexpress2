/**
   to create a new databse
    >use <dbName> //todos ma change garcha 
 */

/** 
    sql vs no-sql
    
   table->colection
   row->document
   */

//to create table/collection in databse
db.createCollection("todos");
db.createCollection("users");

//show collections >to view the list of collections in databse

db.todos.insertOne({ name: "html" });
db.todos.insertOne({ name: "css" });
db.users.insertOne({ name: "kshitij" });

//create collection nagrera sidhai collection ko name ma insert one gare ni collection bancha plus with object

db.products.insertOne({ name: "laptop", price: 50000 });

db.products.insertMany([
  { name: "mobile", price: 20000 },
  { name: "tablet", price: 30000 },
]); //insert ekai choti dherai ma use arrays

//fetch from database
db.todos.find({});

//database deletion
db.users.drop();

db.todos.insertOne({name:"js", status: false})
//no sql ma euta ma matra naya topic add garna payo but not in sql


db.todos.find({name:"html"})

/** update operators
 $set >update
 $inc
 $facet
 .
 .

 */
db.todos.updateOne({name:"html"}, {$set: {status: false}})
db.todos.updateOne({name:"css"}, {$set: {status: true}})

db.todos.updateMany({name:"html"}, {$set: {status: true}})//updates all whose name is html

db.todos.deleteOne({name:"react"})

db.todos.replaceOne({name: "express"}, {name: "express", status: false})
