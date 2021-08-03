import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    playlist: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
    

  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
