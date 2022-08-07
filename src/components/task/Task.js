

import {FaTrash} from 'react-icons/fa'
import { HiBadgeCheck } from "react-icons/hi";
import { useState  } from 'react';

export default function Task({task, index, handleRemove}){
    
    const [checked, setChecked] = useState(false)

    function remove(){
        handleRemove(index)
    }

    function isChecked(){

        setChecked(!checked)
    }

    return (
        <div className="w-full flex justify-between bg-slate-200 bg-opacity-50 rounded-md p-2 mb-2">
            <div className='flex items-center space-x-2'>
                <HiBadgeCheck onClick={isChecked} className='hover:text-slate-400'/>
                <span className={checked ? 'text-lg text-red-900 line-through' : "text-lg text-gray-900 cursor-pointer hover:text-neutral-300"}>
                    {task.title}
                </span>
            </div>
            <div className="flex items-center space-x-2">
                <FaTrash className='cursor-pointer' onClick={remove} />
            </div>
            
        </div>
    )
}