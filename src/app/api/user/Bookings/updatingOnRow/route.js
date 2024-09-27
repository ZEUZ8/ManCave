import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request = NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody, " the requrest body");
    const { userName, mobile, barberName, adult, child } = reqBody;

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
    const updatedBooking = await Bookings.findOneAndUpdate(
        { createdAt: { $gte: startOfCurrentDay, $lte: endOfCurrentDay } },
        { $set: { adult, child, mobile, userName } },
        { mobile },
    );

    if (!updatedBooking) {
      return NextResponse.json({
        error: "No booking found for the provided mobile number on the current day",
      }, { status: 404 });
    }

    return NextResponse.json({
      message: "Booking updation successfull",
      success: true,
      updatedBooking,
    });

  } catch (err) {
    console.log(err, " error at booking in funcitonality");
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
