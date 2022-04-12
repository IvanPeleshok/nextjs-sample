import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
