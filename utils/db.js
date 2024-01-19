const mongoose=require('mongoose')
const connectMongo=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log("Todo bien conexion mongo");
    } catch (error) {
        console.log(error,"conexion fallida mongoose");
        
    }
}

module.exports=connectMongo;