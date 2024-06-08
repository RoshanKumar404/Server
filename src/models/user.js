const mongoose= require("mongoose")
const schema=mongoose.Schema;
const Users=new schema({
    name:String,
    phoneNumber:String,
    profileImage:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s"
    },
    about:String
})
module.exports=mongoose.model("users",Users)