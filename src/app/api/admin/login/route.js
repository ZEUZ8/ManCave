import { Connect } from "@/dbConfig/connect";
import Admin from "../../../../../server/src/models/adminModal";
import { NextRequest, NextResponse } from "next/server";

Connect();

export async function POST(request  = NextRequest) {
  console.log(" the foster");
  try {
    const rebBody = await request.json();
    const { email, username, password } = rebBody;
    console.log(email, username, password, " the data in the console");

    const createAdmin = new Admin({
      username:'basil',
      email:"basil@gmail.com",
      password:"basil@123",
    });

    const admin = await createAdmin.save();
    console.log(admin,' the adming')

    return NextResponse.json({
      message: "user created succesfully",
      success: true,
      admin,
    });
  } catch (err) {
    console.log(err, " error at the login functionaliry");
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
