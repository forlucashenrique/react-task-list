import ButtonAdd from "../layout/ButtonAdd"
import {useState} from 'react'

export default function TaskForm({tasks, handleAddTask}){
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [author, setAuthor] = useState()
    // const [createdAt, setCreatedAt] = useState()


    function createNewTask(){
        const newTask = {
            title: title,
            description: desc,
            author: author,
            createdAt: '07/08/2022'
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
            <form className="mb-2">
                <label className="text-xl text-slate-200 font-light ">Título</label>
                <div>
                    <input onChange={handleChangeTitle} className='w-60 p-2 rounded-md' type="text" placeholder="Título da tarefa..."/>
                </div>
                <label className="text-xl text-slate-200 font-light ">Descrição</label>
                <div>
                    <textarea onChange={handleChangeDesc} className='w-60 p-2 rounded-md' type="text" placeholder="Descrição da tarefa..."/>
                </div>
                <label className="text-xl text-slate-200 font-light ">Autor</label>
                <div>
                    <input onChange={handleChangeAuthor} className='w-60 p-2 rounded-md' type="text" placeholder="Autor da tarefa..."/>
                </div>
                
            </form>
            <ButtonAdd text='Adicionar' handleClick={createNewTask}/>
        </div>
    )
}