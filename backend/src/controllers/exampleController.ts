import * as Yup from "yup";
import dotenv from "dotenv";
import errorHandler from "../utils/errorHandler";

dotenv.config();

// @desc    example
// @route   GET /example/demo
// @access  Public
export const example = async (req, res) => {
  res.send("Hello World");
};
