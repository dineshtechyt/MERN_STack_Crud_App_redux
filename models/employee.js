import mongoose from "mongoose";

const employee = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Employee", employee);
