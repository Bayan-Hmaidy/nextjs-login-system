import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// extract user data from token (encode -> decode)
export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(token, process.env.SECRET_KEY!);
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }

}
