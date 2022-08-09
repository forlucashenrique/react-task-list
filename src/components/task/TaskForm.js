import ButtonAdd from "../layout/ButtonAdd"
import {useState} from 'react'
import moment  from "moment"

import {FaBackward} from 'react-icons/fa'

export default function TaskForm({handleShowForm, handleAddTask}){
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [author, setAuthor] = useState()
    // const [createdAt, setCreatedAt] = useState()


    function getDateNow() {
        const dayOfMonth = moment().format('DD')
        const month = moment().format('MM')
        const year = moment().format('yyyy')

        return `${dayOfMonth}/${month}/${year} `
    }

    function createNewTask(){
        const newTask = {
            title: title,
            description: desc,
            author: author,
            createdAt: getDateNow(),
            done: false
        }
        console.log(newTask)
        handleAddTask(newTask)
    }

    function handleChangeTitle(e){
        setTitle(e.target.value)
    }
    function handleChangeDesc(e){
        setDesc(e.target.value)
    }

    function handleChangeAuthor(e){
        setAuthor(e.target.value)
    }


    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-96">
                <FaBackward onClick={handleShowForm} className="text-2xl text-slate-200 cursor-pointer"/>

            </div>
            <form className="mb-2">
                <label className="text-xl text-slate-200 font-light ">Título</label>
                <div>
                    <input onChange={handleChangeTitle} className='w-60 p-2 rounded-md placeholder:text-sm placeholder:italic' type="text" placeholder="Título da tarefa..." required/>
                </div>
                <label className="text-xl text-slate-200 font-light  ">Descrição</label>
                <div>
                    <textarea onChange={handleChangeDesc} className='w-60 p-2 rounded-md placeholder:text-sm placeholder:italic' type="text" placeholder="Descrição da tarefa..."/>
                </div>
                <label className="text-xl text-slate-200 font-light ">Autor</label>
                <div>
                    <input onChange={handleChangeAuthor} className='w-60 p-2 rounded-md placeholder:text-sm placeholder:italic' type="text" placeholder="Autor da tarefa..."/>
                </div>
                
            </form>
                <ButtonAdd text='Adicionar' handleClick={createNewTask}/>
        </div>
    )
}