import React, {useState} from "react";
export function TaskList(props){
    const [isCompleted, setIsCompleted] = useState(false);
    const {descripcion} = props;

    const handleClick = ()=>{
    setIsCompleted(!isCompleted);
    console.log(`${props.descripcion} Tarea Completada`)
    }
    
    return(
        
    <div className="ListaTareas">

        <ul className="lista">
                
            <input className="completada"
            type="radio" 
            name="" 
            id="" 
            onClick={handleClick}
            checked={isCompleted}/>

            <span
            style={{
            textDecoration: isCompleted ? "line-through" : "none",}}>
            {props.descripcion}
            </span>

        </ul>

        <div className="botones">

            <button className= "editar" 
            onClick={function(){
            console.log(`${descripcion} Editada `)}}><i 
            className="Small material-icons">border_color</i>
            </button>

            <button onClick={function(){console.log(`${descripcion} Eliminada `)}}><i className="material-icons">cancel</i>
            </button>

        </div>        
    </div>
    )
}