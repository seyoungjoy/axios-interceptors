import axiosInstance from "../http/axiosConfig";

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};

type TodosResponse = {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
};

type NewTodo = Pick<Todo, "todo" | "completed" | "userId">

export const addTodo = async (todo:NewTodo):Promise<Todo> => {
    const response = await axiosInstance.post<Todo>("/todos/add", todo);
    return response.data;
}

export const fetchTodos = async ():Promise<TodosResponse> => {
    const response = await axiosInstance.get<TodosResponse>("/todos");
    return response.data;
}

export const updateTodo = async (todo:Todo):Promise<Todo> => {
    const response = await axiosInstance.put<Todo>(`/todos/${todo.id}`, todo);
    return response.data;
}

export const deleteTodo = async (id:number):Promise<Todo> => {
    const response = await axiosInstance.delete<Todo>(`/todos/${id}`);
    return response.data;
}