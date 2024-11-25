import React, { useRef } from "react";

const Login = ({ loginHandler }) => {
  // Capturing form Data
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // Passing data to parent component
    loginHandler(email, password);
    console.log(`Form Submitted with: ${email} and ${password}`);
    setTimeout(() => {
      if (emailRef.current && passwordRef.current) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
    }, 500);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 py-20 px-16 rounded-md">
        <h1 className="text-3xl font-semibold mb-10">Log in</h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="bg-transparent outline-none px-5 py-3 rounded-full text-xl border-2 border-emerald-600 placeholder:text-gray-400"
            required
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
          <input
            className="bg-transparent mt-4 outline-none px-5 py-3 rounded-full text-xl border-2 border-emerald-600 placeholder:text-gray-400"
            required
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
          />
          <button className="mt-6 text-xl border-none outline-none bg-emerald-600 rounded-full w-full px-5 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
