import { fetchTodos, TodosResponse} from "./services/apis/todoApi";
import { useQuery} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import TodoForm from "./components/TodoForm";

function App() {
    const useTodoData = () => {
        return useQuery<TodosResponse, AxiosError | Error>(["todos"], fetchTodos);
    }
    const {data, isError, isLoading, error} = useTodoData();

    if(isError){
        if(axios.isAxiosError(error)){
            console.log("axiosError", error)
        } else {
            console.log("error", error)
        }
        return <div>error!!!{error.message}</div>
    }

    if(isLoading){
        return <div>loading...</div>
    }

    return (
        <div>
            <h1>TODO APP</h1>
            <TodoForm/>
            
            {/* Read*/}
            <ul>
                {
                    data.todos.map((todo) => <li key={todo.id}>{todo.todo}</li>)
                }
            </ul>

        </div>

    )
}
// react query 세팅
// error boundary 성공
export default App
