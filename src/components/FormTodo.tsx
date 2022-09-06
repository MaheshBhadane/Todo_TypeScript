import React, {useRef} from "react";

const FormTodo: React.FC<{onAddTodo: ( text: string) => void}> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

    const outputText = todoInputRef.current!.value;

    //if(outputText.trim().length === 0){
    //    return;
    //}
    props.onAddTodo(outputText);
    };


    return (
        <>
        <div className="App">
         <h1>ToDo App</h1>
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="text">Todo Text here..</label>
            <input type='text' id="text" ref={todoInputRef}/>
            </div><br></br>
            <button> Add Here </button>
        </form>
        </div>
        </>
    );
};

export default FormTodo;