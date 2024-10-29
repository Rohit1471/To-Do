import { useState } from 'react';
import './App.css';
import AddNewTask from './components/AddNewTask';
import AllTask from './components/AllTask';
import TaskContainer from './components/TaskContainer';
import { createContext, useContext } from 'react';

// Routes
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

export const TaskContainerProvider = createContext(null);

const routerForToDo = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TaskContainer />}>
      <Route path="/addTask" element={<AddNewTask  />}></Route>
      <Route path="/allTask" element={<AllTask  />}></Route>
    </Route>
  )
)

function App() {
  // From List Form
  let [allTasks, setAllTask] = useState([]);

  return ( 
    <>
     <TaskContainerProvider.Provider value={{allTasks, setAllTask}}>
        <RouterProvider router={routerForToDo} />
      </TaskContainerProvider.Provider>
    </>
  )
}

export default App
