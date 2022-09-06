 
const TodoItem: React.FC<{item: Todo; onRemoveTodo: () => void }> = (props) => {
    return (
    <>
    <li>
        {props.item.text} 
        <button onClick={props.onRemoveTodo}>X</button>
    </li>
    </>);
};

export default TodoItem;