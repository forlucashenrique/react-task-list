import TaskInfo from './TaskInfo'
import {FaTrash} from 'react-icons/fa'
import { HiBadgeCheck } from "react-icons/hi";
import { useState  } from 'react';

export default function Task({task, index, handleRemove}){
    
    const [checked, setChecked] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    function remove(){
        handleRemove(index)
    }

    function isChecked(){
        task.done = !task.done
        setChecked(!checked)
    }

    function handleShowInfo(){
        setShowInfo(!showInfo)
    }

    return (
        <div className="w-full flex justify-between bg-slate-200 bg-opacity-50 rounded-md p-2 mb-2">
            <div className='flex items-center space-x-2'>
                <HiBadgeCheck onClick={isChecked} className={checked ? 'text-red-900' : 'hover:text-slate-400'}/>
                <span onClick={handleShowInfo} className={checked ? 'text-lg text-red-900 line-through' : "text-lg text-gray-900 cursor-pointer hover:text-neutral-300"}>
                    {task.title}
                </span>
                {showInfo && <TaskInfo task={task} handleClose={handleShowInfo}/>}
            </div>
            <div className="flex items-center space-x-2">
                <FaTrash className='cursor-pointer' onClick={remove} />
            </div>
            
        </div>
    )
}