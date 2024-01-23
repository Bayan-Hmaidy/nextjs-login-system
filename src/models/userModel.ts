import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  passwordRecoveryToken: String,
  passwordRecoveryTokenExpiry: Date,
  emailVerificationToken: String,
  emailVerificationTokenExpiry: Date,
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "This field is required!"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "This field is required!"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "This field is required!"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: tokenSchema,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
