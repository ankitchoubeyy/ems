//! employee Data
const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 1",
          description: "Complete the report",
          date: "2024-11-26",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 2",
          description: "Attend meeting",
          date: "2024-11-27",
          category: "Meetings",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 1",
          description: "Prepare presentation",
          date: "2024-11-26",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 2",
          description: "Client call",
          date: "2024-11-27",
          category: "Communications",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      ],
    },
    // Other employees
  ];
  
  //! Admin Data
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
    }
  ];
  
  //! ---- Setting data to local storage --------
  const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  };
  
  //! ---- Getting data from local storage --------
  const getLocalStorage = () => {
    const empData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));
  
    return { empData, adminData };
  };
  
  export { setLocalStorage, getLocalStorage };
  