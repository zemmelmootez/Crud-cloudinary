const mongoose=require('mongoose')
const Connect=()=>{
try {
    mongoose.connect("mongodb://localhost:27017/Emna")
    console.log("connected to database")
    
} catch (error) {
    console.log("erreur connection")
}
  
    
}
module.exports=Connect