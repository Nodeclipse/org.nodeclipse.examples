print("Hello Mongo");

// ReferenceError: setTimeout is not defined
//setTimeout(function(){
//	print("Bye Mongo");
//},1000)

db.scores.find();

print( db.scores.find()  );

var result = db.scores.find();

print( result );

print("Bye Mongo");


/* Output:
 * 
MongoDB shell version: 2.4.6
connecting to: test
Hello Mongo
DBQuery: test.scores -> { }
DBQuery: test.scores -> { }
Bye Mongo

 */




