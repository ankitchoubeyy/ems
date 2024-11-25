import React from "react";

const CreatedTask = () => {
  return (
    <div  className="px-10 py-5 mx-auto bg-black mt-16 rounded-md">
        <h1 className='text-3xl font-semibold mb-5'>Create a Tasks</h1>
      <form
        action=""
        className="flex bg-[#1c1c1c] items-center justify-between px-20 py-10 gap-10"
      >
        <div className="w-[45%]">
          <div>
            <h3 className="py-2 font-semibold text-lg">Task Title</h3>
            <input
              type="text"
              placeholder="Revise your notes ..."
              className="bg-[#313131] px-4 py-2 rounded outline-none w-full"
            />
          </div>
          <div className="mt-2">
            <h3 className="py-2 font-semibold text-lg">Date</h3>
            <input
              type="date"
              name=""
              id=""
              className="bg-[#313131] px-4 py-2 rounded outline-none w-full"
            />
          </div>
          <div className="mt-2">
            <h3 className="py-2 font-semibold text-lg">Assign to</h3>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-[#313131] px-4 py-2 rounded w-full outline-none"
            />
          </div>
          <div className="mt-2">
            <h3 className="py-2 font-semibold text-lg">Category</h3>
            <select
              name=""
              id=""
              className="bg-[#313131] px-4 py-2 rounded outline-none w-full "
            >
              <option value="High">High</option>
              <option value="High">High</option>
              <option value="High">High</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div className="w-[45%]">
          <div className="">
            <h3 className="py-2 font-semibold text-lg">Description</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-[#313131] px-4 py-2 rounded outline-none w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 outline-none mt-5 rounded text-xl w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatedTask;
