import './App.css'
import { Header } from './componentes/Header'
import { TaskList } from './componentes/TaskList'

function App() {
  return (
  <div className="container">
    <div className='card'>
    <Header/>

    <TaskList descripcion="Estudiar"/>
    <TaskList descripcion="Limpiar"/>
    <TaskList descripcion="Ir de Compras"/>
    <TaskList descripcion="Sacar al perro"/>

  
    </div>
  </div>
  )
}


export default App
