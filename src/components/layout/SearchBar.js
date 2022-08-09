export default function SearchBar({handleOnChange}){
    

    return (
        <input onChange={handleOnChange} className='w-72 sm:w-80 mr-2 p-2 text-slate-300 bg-transparent border-b-2 border-slate-200 outline-none rounded-lg ring-slate-300 focus:ring-1  transition duration-300	' type="text" placeholder='Buscar tarefa...' />
    )
}