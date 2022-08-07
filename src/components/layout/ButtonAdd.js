

export default function ButtonAdd({text, handleClick}){

    function click() {
        handleClick()
    }

    return (
        <button onClick={click} className='w-28 p-2 text-center rounded-lg bg-slate-800 text-slate-200 sm:w-36 hover:bg-transparent  hover:bg-slate-600 transition duration-300'>
            {text}
        </button>
    )
}