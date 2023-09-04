import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailsPage = () => {
  const [employe, setEmploye] = useState();
  const [employeDet, setEmployeDet] = useState();
  const navigate = useNavigate();
  const params = useParams();

  // ------------------getSingleEmployee------------------
  const getEmployee = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/getEmploye/${params.id}`
      );
      if (data.success) {
        setEmploye(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!employe) getEmployee();
  }, []);

  // ----------------------getEmployeeDetails------------------------
  const getEmployeeDetails = async () => {
    try {
      // alert(process.env.REACT_APP_API)
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/getEmployeDetails/${params.id}`
      );
      if (data.success) {
        setEmployeDet(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!employe) getEmployeeDetails();
  }, []);

  // ----------------------inncrement salary---------------

  const incrSalary = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/increSallary/${params.id}`
      );
      if (data.success) {
        alert("salary updated");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="details">
        <div className="d-head">
          <h1> Details</h1>{" "}
        </div>
        <div className="empl-details">
          <div className="details-list">
            <div className="line">
              <h4>Name</h4>
              <h5>{employe?.name}</h5>
            </div>
            <div className="line">
              <h4>Email</h4>
              <h5>{employe?.email}</h5>
            </div>
            <div className="line">
              <h4>Phone</h4>
              <h5>{employe?.phone}</h5>
            </div>
            <div className="line">
              <h4>Salary</h4>
              <h5>{employe?.salary}</h5>
            </div>

            <div className="line">
              <h4>Country</h4>
              <h5>{employeDet?.country}</h5>
            </div>
            <div className="line">
              <h4>State</h4>
              <h5>{employeDet?.state}</h5>
            </div>
            <div className="line">
              <h4>City</h4>
              <h5>{employeDet?.city}</h5>
            </div>
            <div className="line">
              <h4>Pincode</h4>
              <h5>{employeDet?.pincode}</h5>
            </div>
            <div className="line">
              <h4>EmployeeId</h4>
              <h5>{employeDet?.employeeId}</h5>
            </div>
          </div>
        </div>
        <div className="btn">
          <button className="btn btn-primary" onClick={() => incrSalary()}>
            Increment salary
          </button>
          {employeDet ? (
            <></>
          ) : (
            <>
              <button
                className="btn btn-info m-4"
                onClick={() => {
                  navigate(`/update/${params.id}`);
                }}
              >
                Add more details
              </button>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DetailsPage;
