import {ChangeEvent, FormEvent, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {addTodo, NewTodo, Todo} from "../services/apis/todoApi";
import axios, {AxiosError} from "axios";
import toast from "react-hot-toast";

type AxiosErrorResponse = {
    message : string;
}

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("")

    const useAddData = () => {
        return useMutation<Todo, AxiosError|Error, NewTodo>(addTodo);
    }

    const { mutate, isLoading, isError, error } = useAddData();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({
            todo:newTodo,
            completed:false,
            userId:1000
        })
    }

    if(isError){
        if(axios.isAxiosError<AxiosErrorResponse>(error) && error.response){
            toast.error(`${error.response.status} : ${error.response.data.message}`)
        } else {
            console.error("error : ", error, error?.message )
        }
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todos">투두리스트</label>
            <input type="text" id="todos" value={newTodo} onChange={handleInputChange}/>
            <button type="submit">{
                isLoading ? "추가중" : "추가"
            }</button>
        </form>
    );
};

export default TodoForm;