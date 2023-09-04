import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const UserList = () => {
  const navigate = useNavigate();
  const { employees } = useSelector((state) => state.employees);

  // ---------------delete employee----------------
  const handleDelete = async (id) => {
    let qa =  window.confirm("do you want to delete");
    if (qa==false)return;
    try {
     
        const { data } = await axios.delete(
          `${process.env.REACT_APP_API}/api/deleteEmploye/${id}`
        );
        if (data.success) {
          window.location.reload();
        }
        const res = await axios.delete(
          `${process.env.REACT_APP_API}/api/deleteDetails/${id}`
        );
        alert("deleted successfully");
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <h1 className="home-head">List of Employee</h1>
      <div className="home">
        <div className="head">
          <button
            className="btn btn-dark "
            onClick={() => {
              navigate("/create");
            }}
          >
            create new employee
          </button>
        </div>
        <table class="table">
          {" "}
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">NAME</th>
              <th scope="col">DETAILS</th>
              <th scope="col">UPDATE</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((e, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{e.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/details/${e._id}`);
                    }}
                  >
                    Details
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      navigate(`/update/${e._id}`);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
