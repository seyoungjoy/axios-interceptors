import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ErrorBoundary from "./components/ErrorBoundary";
import {Toaster} from "react-hot-toast";
import {Suspense} from "react";

function App() {
    return (
        <div>
            <h1>TODO APP</h1>
            <ErrorBoundary>
                <Suspense fallback={<div>loading...!!!!!</div>}>
                    <TodoForm/>
                    <TodoList/>
                </Suspense>
            </ErrorBoundary>
            <Toaster position="bottom-center"/>
        </div>
    )
}

export default App
