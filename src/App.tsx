import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import ErrorBoundary from "./components/error/ErrorBoundary";
import {Toaster} from "react-hot-toast";
import {Suspense} from "react";
import ErrorFallback from "./components/error/ErrorFallback";

function App() {
    return (
        <main>
            <h1>TODO APP</h1>
            <ErrorBoundary fallback={ErrorFallback}>
                <Suspense fallback={<div>loading..</div>}>
                    <TodoForm/>
                    <TodoList/>
                </Suspense>
            </ErrorBoundary>
            <Toaster position="bottom-center"/>
        </main>
    )
}

export default App
