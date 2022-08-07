

export default function Container(props){
   

    return (
        <div className='w-4/5 h-3/5 m-auto p-2 md:overflow-x-auto md:overflow-none'>
            {props.children}
        </div>
    )
}