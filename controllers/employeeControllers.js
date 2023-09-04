import empDetails from "../models/empDetails.js";
import employee from "../models/employee.js";

// ----------------create employee--------------------------------
export const createEmploye = async (req, res) => {
  try {
    const { name, email, phone, salary } = req.body;

    const data = await new employee({
      name: name,
      email: email,
      phone: phone,
      salary: salary,
    });
    data.save();
    res.status(200).send({
      success: true,
      message: "successfull",
      data: data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "error",
    });
  }
};
// ------------------------update employee---------------------

export const updateEmploye = async (req, res) => {
  try {
    const { name, email, phone, salary } = req.body;

    const mData = await employee.findById({ _id: req.params.id });
    const data = await employee.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: name ? name :mData.name ,
        email: email? email:mData.email,
        phone: phone? phone:mData.phone,
        salary: salary? salary:mData.salary,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "successfully updated",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "error",
    });
  }
};

// ---------------------------delete employee----------------------
export const deleteEmploye = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await employee.findByIdAndDelete({ _id: id });

    res.status(200).send({
      success: true,
      message: "delete successfull",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error,
    });
  }
};

//   -------------------getsingleemployee---------------------
export const getEmploye = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await employee.findById({ _id: id });

    res.status(200).send({
      success: true,
      message: "successfull get successfull",
      data: data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error,
    });
  }
};
// ------------------------getallemployee-------------------------------------
export const getAllEmploye = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await employee.find();

    res.status(200).send({
      success: true,
      message: "successfull get all employee",
      data: data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error,
    });
  }
};

// -------------------increment sallary api---------------------

export const incrSal = async (req, res) => {
  try {
    const data = await employee.findByIdAndUpdate({ _id: req.params.id });
    data.salary = data.salary + 5000;
    data.save();
    res.status(200).send({
      success: true,
      message: "successfull get successfull",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "error",
    });
  }
};

// ----------------add employee details--------------------------------
export const createEmployeDetails = async (req, res) => {
  try {
    const { country, state, city, pincode } = req.body;  
    const { id } = req.params;
    const data = await new empDetails({
      country: country,
      state: state,
      city: city,
      pincode: pincode,
      employeeId: id,
    });
    data.save();
    res.status(200).send({
      success: true,
      message: "successfull",
      data: data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "error",
    });
  }
};

// --------------get employee details----------------
export const getEmployeDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await empDetails.findOne({ employeeId: id });

    res.status(200).send({
      success: true,
      message: "successfull get all employee details",
      data: data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error,
    });
  }
};

export const detailsDelete = async (req, res) => {
  try {
    const data = await empDetails.findOneAndDelete({
      employeeId: req.params.id,
    });
    res.status(404).send({
      success: true,
      message: "deleted details successfully",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error,
    });
  }
};
