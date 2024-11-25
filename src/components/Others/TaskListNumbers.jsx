import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='bg-red-600 px-5 py-5 w-[45%] rounded-xl'>
            <h1 className='font-semibold text-4xl'>1</h1>
            <h2 className='font-medium text-3xl'>New Task</h2>
        </div>
        <div className='bg-green-600 px-5 py-5 w-[45%] rounded-xl'>
            <h1 className='font-semibold text-4xl'>1</h1>
            <h2 className='font-medium text-3xl'>New Task</h2>
        </div>
        <div className='bg-blue-600 px-5 py-5 w-[45%] rounded-xl'>
            <h1 className='font-semibold text-4xl'>1</h1>
            <h2 className='font-medium text-3xl'>New Task</h2>
        </div>
        <div className='bg-yellow-500 px-5 py-5 w-[45%] rounded-xl'>
            <h1 className='font-semibold text-4xl'>1</h1>
            <h2 className='font-medium text-3xl'>New Task</h2>
        </div>
        
    </div>
  )
}

export default TaskListNumbers