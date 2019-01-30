var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site").updateOne({'name':'菜鸟教程'},{"$set":{'url':'asdb.com'}},function (err,obj) {
        
    })
});