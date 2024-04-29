import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "please Provide your name"],
    },
    mobile: {
      type: Number,
      required: [true, "please provide your phone number"],
    },
    barberName: {
      type: String,
      required: [true, "please provide barber name"],
    },
    status:{
        type: String,
        default:"Pending"
    }
  },
  {
    timestamps: true,
  }
);
const Bookings =
  mongoose.models.bookings || mongoose.model("bookings", BookingSchema);

export default Bookings;
