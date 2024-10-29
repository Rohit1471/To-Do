import { useState } from 'react';

function SingleTask({ id, title, status, allTasks, setAllTask }) {

    const [singleTask, setSingleTask] = useState(title);
    const [editMode, setEditMode] = useState(false);
    const [taskComplete, setTaskComplete] = useState(false);

    function editFun() {
        console.log("Hello")
        setEditMode(true)
    }

    function saveFun() {
        setEditMode(false)
        const updatedList = allTasks.map(item => item.id === id ? { ...item, name: singleTask } : item);
        setAllTask(updatedList)
    }

    function completedFun() {
        setTaskComplete(true);
    }

    function deleteFun() {
        setAllTask(allTasks.filter((task) => task.id !== id));
    }

    return (
        <>
            <li id={id} className={`singleTaskLi flex gap-4 items-center rounded-md bg-slate-100 py-3 justify-between px-3 [&:not(:first-child)]:mt-2`}>
                <div className='inputContainer flex flex-col w-4/6'>
                    <input type="text" value={singleTask} placeholder='Dummy Task' className={`taskInput p-4 w-[100] bg-slate-100 rounded-2xl ${!editMode && 'hidden'}`} onChange={(e) => { setSingleTask(e.target.value) }}></input>
                    <h2 className={`taskTitle text-xl font-semibold pl-4 ${taskComplete && 'line-through'} ${editMode && 'hidden'}`}>{singleTask}</h2>
                </div>
                <div className='btnContainer flex gap-4'>
                    {!taskComplete &&
                        <button className='taskEditBtn button edit' onClick={editMode ? saveFun : editFun}>{editMode ? 'Save' : 'Edit'}</button>
                    }
                    <button className='taskDelBtn button delete' onClick={taskComplete ? deleteFun : completedFun}>{taskComplete ? 'Delete' : 'Completed'}</button>
                </div>
            </li>
        </>
    )
}

export default SingleTask
