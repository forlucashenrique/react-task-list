
import moment  from 'moment'



export default function Header(){

    

    const daysNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const monthsNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const dayOfWeek = daysNames[moment().format('d')]
    const dayOfMonth = moment().format('D')
    const month = monthsNames[moment().format('M') - 1]
    

  
    return (
        <div className='w-full p-8 '>
            <header className='w-full flex flex-col items-center  text-center'>
                <h1 className='w-52 p-2 mb-4 font-light  text-slate-200 bg-slate-600 bg-opacity-75'>{dayOfWeek}, {dayOfMonth} de {month}</h1>
                <p className='font-medium tracking-wide text-slate-200 text-sm'>O sucesso é a soma de pequenos esforços repetidos dia após dia.</p>
            </header>
        </div>
    )
}