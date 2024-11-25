import React from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <Header />
      <div className="px-10 py-10 mx-auto h-screen bg-[#1c1c1c] mt-10">
        <TaskListNumbers />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
