import { Connect } from "@/dbConfig/connect";
import Bookings from "@/models/userBooking";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

Connect();

export async function POST(request = NextRequest) {
  try {
    const reqBody = await request.json();
    const { userName, mobile, barberName } = reqBody;

    //starting and ending of teh curretn date for checking the if the user already booked a slot
    const currentDate = new Date();
    const startOfCurrentDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      0,
      0,
      0
    );
    const endOfCurrentDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      23,
      59,
      59
    );
    const alreadyBookedCustomer = await Bookings.find({
      $and: [
        { createdAt: { $gte: startOfCurrentDay, $lte: endOfCurrentDay } },
        { mobile },
      ],
    });
    console.log(alreadyBookedCustomer,' the customer in teh console')
    if(!alreadyBookedCustomer || !alreadyBookedCustomer.length) {
    console.log('the user in the console')
      const createBooking = new Bookings({
        userName,
        mobile,
        barberName,
      });
      const booking = await createBooking.save();
      return NextResponse.json({
        message: "Booking posting successfull",
        success: true,
        booking,
      });
    } else {
      return NextResponse.json({
        message: "Already booked",
        success:false,
        alreadyBookedCustomer
      });
    }
  } catch (err) {
    console.log(err, " error at booking in funcitonality");
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
