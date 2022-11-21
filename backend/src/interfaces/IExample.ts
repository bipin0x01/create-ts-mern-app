import { Document } from "mongoose";

export interface IExample extends Document {
  name?: string;
  email?: string;
}
