import mongoose from 'mongoose';
import express from 'express';
import { createEmploye, createEmployeDetails,   deleteEmploye,  detailsDelete,  getAllEmploye, getEmploye, getEmployeDetails, incrSal, updateEmploye } from '../controllers/employeeControllers.js';
export const empRouter=express.Router();


// -----------employee------------
empRouter.post("/create",createEmploye)
empRouter.get("/getEmploye/:id",getEmploye)
empRouter.get("/getAllEmploye",getAllEmploye)
empRouter.delete("/deleteEmploye/:id",deleteEmploye)
empRouter.put("/updateEmploye/:id",updateEmploye)
empRouter.put("/increSallary/:id",incrSal)


// -------------employee details----------
empRouter.post("/employeDetails/:id",createEmployeDetails)
empRouter.get("/getEmployeDetails/:id",getEmployeDetails)
empRouter.delete("/deleteDetails/:id",detailsDelete)
