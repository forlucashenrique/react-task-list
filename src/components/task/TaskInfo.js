

export default function TaskInfo({task, handleClose}) {
    return (
        <div className="w-96 h-96 p-2 rounded-lg absolute left-8 top-24 sm:left-1/3 md:left-100 md:top-32  bg-slate-300 ">
            <div className="w-full h-8">
                <span onClick={handleClose} className="float-right mr-4 text-5xl cursor-pointer">&times;</span>
            </div>
            <div className="w-full">
                <label className="font-bold">Título</label>
                <div>
                    <input className='w-full p-2 mb-1 rounded-lg' type="text" value={task.title} />
                </div>
                <label className="font-bold">Descrição</label>
                <div>
                    <textarea className='w-full p-2 mb-1 rounded-lg' type="text" value={task.description} />
                </div>
                <label>Autor</label>
                <div>
                    <input className='w-full p-2 mb-1 rounded-lg' type="text" value={task.author} />
                </div>
                <label>Data de criação</label>
                <div>
                    <input className='w-full p-2 mb-1 rounded-lg' type="text" value={task.createdAt} />
                </div>
                <div>
                    <p>Status: {task.done ? (
                        <span>Tarefa finalizada!</span>
                    ) : (
                        <span>Tarefa pendente</span>
                    )}</p>
                </div>
            </div>
        </div>
    )
}
