import {FaTrash} from 'react-icons/fa'
import { HiBadgeCheck, HiPencil } from "react-icons/hi";

export default function Task({task, index, handleRemove}){

    function remove(){
        handleRemove(index)
    }

    return (
        <div className="w-full flex justify-between bg-slate-200 bg-opacity-50 rounded-md p-2 mb-2">
            <div className='flex items-center space-x-2'>
                <HiBadgeCheck className='hover:text-slate-400'/>
                <span className="text-lg text-gray-900 cursor-pointer hover:text-neutral-300">
                    {task.title}
                </span>
            </div>
            <div className="flex items-center space-x-2">
                <HiPencil className='text-xl'/>
                <FaTrash onClick={remove} />
            </div>
        </div>
    )
}