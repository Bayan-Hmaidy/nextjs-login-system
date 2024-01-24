import { getDataFromToken } from "@/helpers/authUtils";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDb } from "@/lib/db";

connectDb();

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("email username");

        return NextResponse.json(user)
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}