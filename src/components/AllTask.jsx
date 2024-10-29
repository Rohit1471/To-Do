import { useContext } from "react";
import SingleTask from "./SingleTask";
import { TaskContainerProvider } from "../App";


function AllTask() {
    const { allTasks, setAllTask } = useContext(TaskContainerProvider);

    return (
        <>
            {allTasks?.length > 0 ?
                <ul className="allTaskContainer list-none mt-4 py-6 px-4 rounded-md bg-stone-300">
                    {allTasks.map((taskItem, index) => {
                        return <SingleTask key={taskItem.id} id={taskItem.id} title={taskItem.title} status={taskItem.status} allTasks={allTasks} setAllTask={setAllTask} />
                    })}
                </ul> : <h3 className="text-3xl">Please add a task...</h3>
            }
        </>
    )

}

export default AllTask;