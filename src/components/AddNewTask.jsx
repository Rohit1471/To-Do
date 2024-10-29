import { useContext, useState } from "react";
import { TaskContainerProvider } from "../App";


function AddNewTask() {

    const { allTasks, setAllTask } = useContext(TaskContainerProvider);
    const [addInput, setAddInput] = useState('Nothing');

    function AddNewTaskToTaskList() {
        setAllTask(previousState => [...previousState, { id: Date.now(), title: addInput, status: false }])
    }

    return (
        <>
            <div className="addNewTaskContainer flex gap-4 justify-center py-6 px-4 rounded-md bg-gray-200">
                <input className="addNewTaskInput p-4 w-[100] bg-slate-100 rounded-2xl w-full" placeholder="Add New Task" value={addInput} onChange={(e) => setAddInput(e.target.value)}></input>
                <button className="addNewTaskBtn button add" onClick={AddNewTaskToTaskList}>Add</button>
            </div>
        </>
    )
}

export default AddNewTask;
