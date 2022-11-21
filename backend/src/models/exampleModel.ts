import mongoose from "mongoose";
import { IExample } from "../interfaces/IExample";

const exampleSchema = new mongoose.Schema<IExample>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IExample>("Example", exampleSchema);

export default User;
