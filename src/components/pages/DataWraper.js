import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setEmployees } from "../../redux/slice/getEmployees";
const DataWraper = ({ children }) => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employees);

  // -----------get all employee----------------
  const getAllEmployee = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/getAllEmploye`
      );
      if (data.success) {
        dispatch(setEmployees(data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!employees) getAllEmployee();
  }, []);
  return <>{children}</>;
};

export default DataWraper;
