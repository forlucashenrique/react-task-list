
import { useState } from 'react';

import Container from "./components/layout/Container"
import ContainerTask from "./components/layout/ContainerTask"
import TaskForm from "./components/task/TaskForm"
import ButtonAdd from './components/layout/ButtonAdd'
import SearchBar from './components/layout/SearchBar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'


function App() {

  const [search, setSearch] = useState('')
  const [tasks, setTasks] = useState([    
    {   

        title: 'Estudar Javascript',
        description: 'Aprender sobre funções',
        author: 'Lucas Henrique',
        createdAt: '05/08/2022',
        done: false
    
    },
    {
        title: 'Estudar React',
        description: 'Pesquisar sobre os hooks',
        author: 'Lucas Henrique',
        createdAt: '05/08/2022',
        done: false
    },
    
  ])
  const [showTaskForm, setShowTaskForm] = useState(true)
  
  const filteredList = search.length > 0 
  ? tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase())) : []


  function handleShowTaskForm(){
    console.log('clicou')
    setShowTaskForm(!showTaskForm)
  }

  function addTask(newTask){

    setTasks([...tasks, newTask])
    console.log(newTask)
    setShowTaskForm(!showTaskForm)
  }

  function removeTask(index){
    const newTasks = tasks.filter((task, pos) => index !== pos)
    setTasks(newTasks)
  }

  return (
    <div className="w-full h-full">
       <Header />
       <Container >
            { showTaskForm ? (
                <>
                    <div className='w-full flex justify-around items-center  mb-2'>
                    <SearchBar handleOnChange={e => setSearch(e.target.value)}/>
                    <ButtonAdd handleClick={handleShowTaskForm} text='Adicionar Tarefa'/>
                    </div>
                    {filteredList.length > 0 ? (
                      <ContainerTask tasks={filteredList} handleRemoveTask={removeTask}></ContainerTask>

                    ) : (
                      <ContainerTask tasks={tasks} handleRemoveTask={removeTask}></ContainerTask>
                    )}
                </>
                
            ) : (
                <TaskForm handleShowForm={handleShowTaskForm} handleAddTask={addTask}/>
            )}
          </Container> 
        <Footer />
      
    </div>
  );
}

export default App;
