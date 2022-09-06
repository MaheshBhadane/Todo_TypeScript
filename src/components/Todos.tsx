import React from "react";
 import TodoItem from "./TodoItem";

const Todos:React.FC<{items: Todo[]; onRemoveTodo: (id:string) => void}> = (props) => {
    return (
    <div className="App">

        {props.items.map((item) =>(
            <TodoItem key={item.id} item={item} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
            ))}
        
    </div>
    );
}

export default Todos;
