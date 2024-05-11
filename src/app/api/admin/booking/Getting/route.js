import { Connect } from "@/dbConfig/connect";
import Bookings from "@/models/userBooking";
import { NextResponse,NextRequest } from "next/server";

Connect()

export async function GET(request = NextRequest){
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
    try{
      const response = await Bookings.find({
        $or: [
          { createdAt: { $gte: startOfCurrentDay, $lte: endOfCurrentDay } },
          { updatedAt: { $gte: startOfCurrentDay, $lte: endOfCurrentDay } }
        ]
      });
        if(response){
            return NextResponse.json({
                message: "Getting Bookings successfull",
                success: true,
                response,
              });
        }else{
            return NextResponse.json({
                message: "not bookings",
                success:false,
              });
        }
    }catch(err){
        console.log(err,' consoling bookings getting error in the service page')
        return NextResponse.json({error:err},{status:500})
    }
}