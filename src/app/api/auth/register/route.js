import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const response = await axios.post("http://localhost:3007/register", {
      ...body,
    });
    console.log(response?.data, "teh response");
    if (response?.data?.msg === "register successful") {
      return NextResponse.json(
        { msg: response.data.msg, user: response.data.user },
        { status: 200 }
      );
    } else {
      const errorMessage = response?.data?.msg
        ? response.data.msg
        : "Please Try again";
      return NextResponse.json({ msg: errorMessage },{status:301});
    }
  } catch (err) {
    console.log(err, " the response data");
    return NextResponse.json({ msg: "Error at Register" }, { status: 500 });
  }
};
