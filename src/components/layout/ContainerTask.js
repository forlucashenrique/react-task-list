import Task from '../task/Task.js'

export default function ContainerTask({tasks, handleRemoveTask}){

    

    function removeTask(index){
        handleRemoveTask(index)
        // setTasks(newTasks)
    }

    return (
            <>
                { tasks.length > 0 && (
                tasks.map((task, index) => (
                    <Task 
                        task={task}  
                        key={index}
                        index={index}
                        handleRemove={removeTask} 
                    />
                    )
                )
                )}
                {tasks.length === 0 && (
                    <div className='w-full flex justify-center'>
                        <p className='w-32 bg-red-900 text-slate-300 text-center p-2'>Não há tarefas</p>
                    </div>
                )}
        
            </>
            
    )
}