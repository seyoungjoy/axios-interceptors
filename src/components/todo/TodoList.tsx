import { fetchTodos, TodosResponse} from "../../services/apis/todoApi";
import { useQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";

const TodoList = () => {
    const useTodoData = () => {
        return useQuery<TodosResponse, AxiosError | Error>(["todos"], fetchTodos);
    }
    const {data, isError, error} = useTodoData();

    if(isError){
        throw error;
    }

    return (
        <ul>
            {
                data?.todos.map((todo) => <li key={todo.id}>{todo.todo}</li>)
            }
        </ul>
    );
};

export default TodoList;