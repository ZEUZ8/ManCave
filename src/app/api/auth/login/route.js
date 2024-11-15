import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  console.log('got in the api router')
  try {
    const body = await req.json();
    const response = await axios.post(`http://localhost:3007/login`,{...body});
    if(response?.data?.msg === "login succesfull"){
        return NextResponse.json({ msg: "returning simple message" });
    }else{
        const errorMessage = response?.data?.msg ? response?.data?.msg : "Can't find you, please train again"
        return NextResponse.json({errorMessage},{status:401})
    }
  } catch (err) {
    console.log(err.response?.data, "erro in the login api route handler");
    return NextResponse.json({ msg: "Erorr in login" }, { status: 500 });
  }
};
