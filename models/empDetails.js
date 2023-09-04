import mongoose from "mongoose";

const empDetails = new mongoose.Schema({
  country: {
    type: String,
    required: true,


  },
  state: {
    type: String,
    required: true,

  },
  city: {
    type: String,
    required: true,

  },
  pincode: {
    type: Number,
    required: true,

  },
  employeeId: {
    type: mongoose.ObjectId,
    ref: "Employee",
    required: true,
  },
});

export default mongoose.model("empDetails", empDetails);
