import { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
import { setLocalStorage } from "./utils/localStorage.js";

function App() {
  const [user, setUser] = useState(null);

  // Initialize local storage data
  useEffect(() => {
    setLocalStorage();
  }, []);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser).role);
      }
    }
  }, [authData]);

  const loginHandler = (email, password) => {
    console.log("Attempting login with:", email, password);
    console.log("Auth data:", authData);

    if (authData) {
      console.log("Admin data:", authData.adminData);
      console.log("Employee data:", authData.empData);

      const admin = authData.adminData?.find((e) => email === e.email && password === e.password);
      const employee = authData.empData?.find((e) => email === e.email && password === e.password);

      if (admin) {
        console.log("Admin logged in");
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      } else if (employee) {
        console.log("Employee logged in");
        setUser("employee");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
      } else {
        console.log("Invalid credentials");
      }
    } else {
      console.log("Auth data is not available");
    }
  };

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
