import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username:{
        type:String,
        required:[true,'Please provide a username'],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide a  Email"]
    },
    password:{
        type:String,
        required:[true,'Please provide a password']
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry :Date,
})

const Admin = mongoose.models.admin || mongoose.model("admin", AdminSchema);

export default Admin