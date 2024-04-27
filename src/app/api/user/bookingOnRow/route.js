import { Connect } from "@/dbConfig/connect";
import { NextRequest,NextResponse } from "next/server";

Connect()

export async function POST(request = NextRequest){
    try{
        const reqBody = await request.json();
        const {userName,phone} = reqBody;
        console.log(userName,phone , ' the user name and the phone number')
    }catch(err){
        console.log(err,' error at booking in funcitonality')
    }
}