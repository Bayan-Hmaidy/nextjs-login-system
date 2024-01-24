import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";

// Default users
const defaultUsers = [
  { username: "user1", email: "user1@example.com", password: "password1" },
  { username: "user2", email: "user2@example.com", password: "password2" },
];

export async function connectDb() {
  try {

    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });
    const hashedUsers = await Promise.all(
      defaultUsers.map(async (user) => {
        const hashedPassword = await bcryptjs.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );

    console.log(`${hashedUsers.length} default users hashed successfully.`);

    await User.insertMany(hashedUsers);

    connection.on("error", (err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
