export function Header(){

    
    const handleClick = ()=>{
        console.log(`Tarea Agregada `);
    }
    
    return(
    <div className="agregar">
        
        <h2>Lista de Tareas</h2>

        <div className="ContentAgre">

        <input type="text" 
        name="lista" 
        id="tarea" 
        placeholder="Ingrese la tarea"/>
    
        <input onClick={handleClick} 
        type="button"
        value="+"/>

        </div>
    </div>
    )
}