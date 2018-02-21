//const MongoClient = require("mongodb").MongoClient;

const {MongoClient,ObjectID}= require("mongodb");
var obj = new ObjectID();
console.log(obj);


MongoClient.connect("mongodb://localhost:27017/test",(err,db)=> {
	if(err)
	{return	console.log(err);}
	console.log("Connected");
	
	
/*db.collection("customers").insertOne({text:"new"},(err,result)=> {
	if(err)
		{
			return console.log("fdfsdfsd",err);
		}*/
	
//console.log(JSON.stringify(result.ops,undefined,2));
//console.log(result.ops[0]._id.getTimestamp());
//});
	
	
/*db.collection("customers").find({"status":"completed"}).toArray().then((docs) =>
 {
	console.log(JSON.stringify(docs));
	console.log("customers");
},(err) =>
	{console.log("unable");})	*/
	
	
	
db.collection("customers").find({"text":"new text"}).count().then((count) =>{
	
	//console.log(JSON.stringify(docs));
	//console.log(docs);
	console.log(count);
},(err)=>{})	

	
/*db.collection("customers").find().count().then((count) =>
 {
	console.log(count);
	console.log("customers");
},(err) =>
	{console.log("unable");})		
	*/
db.close();
});