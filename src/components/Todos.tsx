import React from "react";
 import TodoItem from "./TodoItem";

const Todos:React.FC<{items: Todo[]; onRemoveTodo: (id:string) => void}> = (props) => {
    return (
    <ul>

        {props.items.map((item) =>(
            <TodoItem key={item.id} item={item} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
            ))}
        
    </ul>
    );
}

export default Todos;