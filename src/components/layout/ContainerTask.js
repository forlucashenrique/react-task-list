import Task from '../task/Task.js'

import {useState} from 'react'

export default function ContainerTask(){

    const [tasks, setTasks] = useState([
        {   
    
            title: 'Estudar Javascript',
            description: 'Aprender sobre funções',
            author: 'Lucas Henrique',
            createAt: '05/08/2022',
            updatedAt: '06/08/2022',
            done: false,
        },
        {
            title: 'Estudar React',
            description: 'Pesquisar sobre os hooks',
            author: 'Lucas Henrique',
            createAt: '05/08/2022',
            updatedAt: '06/08/2022',
            done: false
        }
    ])

    function removeTask(index){
        const newTasks = tasks.filter((task, pos) => index !== pos)
        setTasks(newTasks)
        console.log(tasks)
    }


    return (
        <div className='w-4/5 h-3/5 m-auto p-2 overflow-x-auto'>
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
        </div>
    )
}