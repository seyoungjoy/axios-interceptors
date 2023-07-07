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
// READ
export const fetchTodos = async ():Promise<TodosResponse> => {
    const response = await axiosInstance.get<TodosResponse>("/todos");
    return response.data;
}

// CREATE