import AddNewTask from './AddNewTask';
import AllTask from './AllTask';
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";


function TaskContainer(){    
    return(
        <>           
        <div className="taskContainer w-full max-w-screen-sm mx-auto py-16">
            <h1 className='text-8xl font-bold'>Dashboard</h1>
            <div className='flex items-center gap-6 pt-8'> 
                <Link to={'/addTask'} className='text-2xl font-medium text-cyan-400'>ADD TASK</Link>
                <Link to={'/allTask'} className='text-2xl font-medium text-cyan-400' >ALL TASKS</Link>
            </div>
            <div className='pt-8'>
                <Outlet />
            </div>
        </div>
      </>
    )    
}

export default TaskContainer;