import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/pages/UserList";
import DetailsPage from "./components/pages/DetailsPage";
import UpdatePage from "./components/pages/UpdatePage";
import CreatePage from "./components/pages/CreatePage";
import DataWraper from "./components/pages/DataWraper";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DataWraper ><UserList /></DataWraper>} />
        <Route path={"/create"} element={<CreatePage />} />
        <Route path={"/update/:id"} element={<UpdatePage />} />
        <Route path={"/details/:id"} element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
