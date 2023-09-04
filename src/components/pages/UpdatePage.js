import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [salary, setSalary] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  const [employe, setEmploye] = useState();
  const [employeDet, setEmployeDet] = useState();
  const navigate = useNavigate();
  const params = useParams();

  // ----------------update Employee---------------

  const updateEmployee = async (id) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/updateEmploye/${id}`,
        {
          name,
          email,
          phone,
          salary,
        }
      );
      if (data.success) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!employe) getEmployee();
  }, []);

  // --------------------get Single Employee-------------
  const getEmployee = async () => {
    try {
      // alert(process.env.REACT_APP_API)
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
  // ------------------------addEmployeeDetails----------------------
  const handleCreate = async () => {
    try {
      if (!country || !state || !city || !pincode)
        return alert("fill the details please");

      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/employeDetails/${params.id}`,
        { country, state, city, pincode }
      );
      if (data.success) {
        alert("added employee details");

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Edit Page</h1>

      <div className="update">
        <div className="update-employe">
          <div className="update-form">
            <div className="mb-4 product-form">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder={employe?.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 product-form">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder={employe?.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>{" "}
            {/* {category} */}
            <div className="mb-4 product-form">
              <label htmlFor="">Phone</label>
              <input
                type="number"
                placeholder={employe?.phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>{" "}
            <div className="mb-4 product-form">
              <label htmlFor="">Salary</label>
              <input
                type="number"
                placeholder={employe?.salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 product-form">
              <button
                className="btn btn-primary"
                onClick={() => {
                  updateEmployee(employe._id);
                }}
              >
                Update Employee
              </button>
            </div>
          </div>
        </div>
        {employeDet ? (
          <></>
        ) : (
          <>
            {" "}
            <div className="Add-details">
              <div className="update-form">
                <div className="mb-4 product-form">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    value={employeDet?.country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-4 product-form">
                  <label htmlFor="">State</label>
                  <input
                    type="text"
                    value={employeDet?.state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </div>{" "}
                {/* {category} */}
                <div className="mb-4 product-form">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    value={employeDet?.city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>{" "}
                <div className="mb-4 product-form">
                  <label htmlFor="">Pincode</label>
                  <input
                    type="number"
                    value={employeDet?.pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                  />
                </div>
                {employeDet ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <div className="mb-4 product-form">
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleCreate();
                        }}
                      >
                        Add details
                      </button>{" "}
                    </div>{" "}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default UpdatePage;
