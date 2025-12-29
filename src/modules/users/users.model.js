import mongoose  from "mongoose";

// a data model is created from a data schema

const userSchema = new mongoose.Schema(
{
    username: {type: String, required: true, trim: true},
    role: {type: String, enum: ["user", "admin"], default: "user"},   //enum :ค่าที่เรากำหนดไว้เท่านั้น
    email: {type: String, required: true, unique: true, lowercase: true },
    password: {type: String, required: true, minlength: 6, select: false},
},
{
    timestapms: true,
}
);

// mongodb will automatically create users collection

export const User = mongoose.model("User", userSchema ) //decalration User(U like create class) for these app