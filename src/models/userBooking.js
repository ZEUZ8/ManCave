import mongoose from "mongoose";

const Schema = mongoose.Schema

const BookingSchema = new Schema({
    userName:{
        type:String(),
        required:[true,'please Provide your name']
    },
    mobile:{
        type:Number(),
        required:[true,"please provide your phone number"],
    }
})
const Bookings = mongoose.model.bookings || mongoose.model("bookings" , BookingSchema)

export default Bookings
