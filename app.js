const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {  useNewUrlParser: true });

const fruitsSchema = new mongoose.Schema({
    name:{
         type: String,
        required: [true, "please check data entry, no name"]
    },
    ratings: {

        type: Number,
        min: 1,
        max: 12
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitsSchema);
const fruit = new Fruit ({
    ratings: 10,
    review: "hello"
});
// const banana= new Fruit({
//     name:"Banana",
//     rating:9,
//     review:"The best"
// });
// Fruit.insertMany([fruit,banana], function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("succefully added")
//     }
// });
// fruit.save();
// Fruit.updateOne({_id: "60f9c9b6eebcb76ec0fc6028"},{name:"peach"},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("succefully updated")
//     }
// });
// Fruit.deleteOne({_id: "60f9c7fb9a70756e91f1d329"}, function(err){
//     if(err){
//            console.log(err)
//        }else{
//            console.log("succefully deleted")
//        }
// });
Fruit.find(function(err,fruits){
    if(err){
        console.log(err)
    } else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name)

        })
    }
});

const personSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    favouriteFruit: fruitsSchema
});
const berries= new Fruit({
    name:"berries",
    ratings:9,
    review:"summer favorite"
});
berries.save();
const Person = mongoose.model("Person",personSchema);
const person = new Person({
    name:"MOH",
    Age:25,
favouriteFruit:berries
});
// person.save();
// Person.deleteMany({Age:37},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("deleted all Johns")
//     }
// });
// person.save()
 Person.updateOne({name:"John"},{favouriteFruit:berries},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("updated John")
    }
});
