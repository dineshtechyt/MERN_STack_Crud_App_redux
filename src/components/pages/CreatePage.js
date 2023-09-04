import React, { useState } from "react";
import "./Pages.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreatePage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [salary, setSalary] = useState();
  const navigate = useNavigate();


  // ---------------------create Employee---------------------
  const handleCreate = async () => {
    try {
      if (!name || !email || !phone || !salary) {
        return alert("please fill the details");
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/create`,
        { name, email, phone, salary }
      );
      if (data.success) {
        alert("created  a new employee");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="main">
        <div className="create-employee">
          <div className="form">
            <div className="mb-4 product-form">
              <label htmlFor="">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 product-form">
              <label htmlFor="">Email</label>
              <input
                type="text"
                value={email}
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
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>{" "}
            <div className="mb-4 product-form">
              <label htmlFor="">Salary</label>
              <input
                type="number"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 product-form">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleCreate();
                }}
              >
                Create Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
