import React from "react";
import Header from "../Others/Header";
import CreatedTask from "../Others/CreatedTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <CreatedTask/>
      <AllTask/>
    </>
  );
};

export default AdminDashboard;
