var mongoClient = require("mongodb").MongoClient;

var url =
  "mongodb+srv://kazireazul:f1RBVM0pLawTUawj@cluster0.bglwbam.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(url, function (error, myMongoClient) {
  if (error) {
    console.log("Connection Fail");
  } else {
    console.log("Connection Success");

    // For Insert One Data
    insertData(myMongoClient);

    // For Insert Many Data
    // insertManyData(myMongoClient);

    // For Delete One Data
    // deleteOneItem(myMongoClient);

    // For Delete Many Data
    // deleteManyItem(myMongoClient);

    // For Find One Data Using WithoutCondition
    // findOneWithoutCondition(myMongoClient);

    // For Find One Data Using WithCondition
    // findOneWithCondition(myMongoClient);

    // For Find All Data
    // findAllData(myMongoClient);

    // For Find All Data (Using Projection)
    // findAllDataByProjection(myMongoClient);

    // For Find All Data (Using Query)
    // findAllDataByQuery(myMongoClient);

    // For Find All Data (Using Limit)
    // findAllDataByLimit(myMongoClient);

    // For Find All Data (Using Sorting)
    // findAllDataBySorting(myMongoClient);

    // For Update Data
    // updateMyData(myMongoClient);

    // For Create New Collection
    // CreatMyNewCollection(myMongoClient);

    // For Delete or Drop Collection
    // dropMyCollection(myMongoClient);
  }
});

// Insert Data
// We Can Insert Data in Two Ways
// Such As
// insertOne(); and insertMany();

// For Insert One Data
function insertData(myMongoClient) {
  var myDataBase = myMongoClient.db("school");
  var myCollection = myDataBase.collection("students");

  var myData = { name: "Reazul Islam", roll: "1", age: "20", class: "Ten" };

  myCollection.insertOne(myData, function (error) {
    if (error) {
      console.log("Data Insert Fail");
    } else {
      console.log("Data Insert Success");
    }
  });
}

// For Insert Many Data
// function insertManyData(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   var myManyData = [
//     {
//       name: "Rakibul Islam",
//       roll: "2",
//       age: "19",
//       class: "Ten",
//       city: "Khulna",
//     },
//     {
//       name: "Sakibul Islam",
//       roll: "3",
//       age: "20",
//       class: "Ten",
//       city: "Dhaka",
//     },
//     {
//       name: "Emdaul Islam",
//       roll: "4",
//       age: "18",
//       class: "Ten",
//       city: "Khulna",
//     },
//     {
//       name: "Ashraful Islam",
//       roll: "5",
//       age: "19",
//       class: "Ten",
//       city: "Dhaka",
//     },
//     {
//       name: "Mofizul Islam",
//       roll: "6",
//       age: "20",
//       class: "Ten",
//       city: "Khulna",
//     },
//     {
//       name: "Nokibul Islam",
//       roll: "7",
//       age: "17",
//       class: "Ten",
//       city: "Dhaka",
//     },
//   ];

//   myCollection.insertMany(myManyData, function (error) {
//     if (error) {
//       console.log("Insert ManyData Fail");
//     } else {
//       console.log("Insert ManyData Success");
//     }
//   });
// }

// Delete Data
// We Can Delete Our Data in Two Ways
// Such As
// deleteOne() and deleteMany()

// For Delete One Data
// function deleteOneItem(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   var deleteData = { roll: "2" };

//   myCollection.deleteOne(deleteData, function (error) {
//     if (error) {
//       console.log("Data Delete Fail");
//     } else {
//       console.log("Data Delete Success");
//     }
//   });
// }

// For Delete Many Data
// function deleteManyItem(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   myCollection.deleteMany(function (error, resultObj) {
//     if (error) {
//       console.log("Delete Many Data Fail");
//     } else {
//       console.log(resultObj);
//     }
//   });
// }

// Find Data
// We Can Find Our Data in Two Ways
// Such As
// findOne() and find()
// We Can Use findOne() in Two Ways Such As WithoutCondition and WithCondition

// For Find One Data Using WithoutCondition
// function findOneWithoutCondition(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   var findObj = {};

//   myCollection.findOne(findObj, function (error, result) {
//     console.log(result);
//   });
// }

// For Find One Data Using WithCondition
// function findOneWithCondition(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   var findObj = { class: "Ten", city: "Dhaka" };

//   myCollection.findOne(findObj, function (error, result) {
//     if (error) {
//       console.log("Data Find With Condition Fail");
//     } else {
//       console.log(result);
//     }
//   });
// }

// For Find All Data
// function findAllData(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");
//
//   myCollection.find().toArray(function (error, result) {
//     if (error) {
//       console.log("Find All Data Fail");
//     } else {
//       console.log(result);
//     }
//   });
// }

// For Find All Data (Using Projection)
// function findAllDataByProjection(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");
//
//   var itemObj = {};
//   var itemProjection = {projection:{class:1,name:1}}
//   myCollection.find(itemObj,itemProjection).toArray(function (error, result) {
//     if (error) {
//       console.log("Find All Data Projection Fail");
//     } else {
//       console.log(result);
//     }
//   });
// }

// For Find All Data (Using Query)
// function findAllDataByQuery(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   var query = { class: "Ten", city: "Khulna" };
//   myCollection.find(query).toArray(function (error, result) {
//     if (error) {
//       console.log("Find All Data Query Fail");
//     } else {
//       console.log(result);
//     }
//   });
// }

// For Find All Data (Using Limit)
// function findAllDataByLimit(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   myCollection
//     .find()
//     .limit(3)
//     .toArray(function (error, result) {
//       if (error) {
//         console.log("Find All Data By Limit Fail");
//       } else {
//         console.log(result);
//       }
//     });
// }

// For Find All Data (Using Sorting)
// function findAllDataBySorting(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");

//   var sortPattern = { roll: -1 };

//   myCollection
//     .find()
//     .sort(sortPattern)
//     .toArray(function (error, result) {
//       if (error) {
//         console.log("Find All Data By Limit Fail");
//       } else {
//         console.log(result);
//       }
//     });
// }

// For Update Data
// function updateMyData(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   var myCollection = myDataBase.collection("students");
//
//   var myQuery ={roll:"1"};
//   var myNewValue = {$set: {name:"Mc Donald Trump", roll:"001",city:"America"}};
//   myCollection.updateOne(myQuery,myNewValue,function (error, result){
//     if(error){
//       console.log("Update Data Fail");
//     }
//     else {
//       console.log(result)
//     }
//   })
//
// }

// For Create New Collection
// function CreatMyNewCollection(myMongoClient){
//   var myDataBase = myMongoClient.db('school');
//
//   myDataBase.createCollection('teachers',function (error, result){
//     if(error){
//       console.log("Collection Create Fail");
//     }
//     else {
//       console.log(result)
//     }
//   })
// }

// For Delete or Drop Collection
// function dropMyCollection(myMongoClient) {
//   var myDataBase = myMongoClient.db("school");
//   myDataBase.dropCollection("teachers", function (error, result) {
//     if (error) {
//       console.log("Collection Delete Fail");
//     } else {
//       console.log(result);
//     }
//   });
// }
