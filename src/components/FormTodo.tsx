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
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text here..</label>
            <input type='text' id="text" ref={todoInputRef}/>
            <button> Add </button>
        </form>
    );
};

export default FormTodo;