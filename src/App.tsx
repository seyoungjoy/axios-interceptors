import './App.css'
import useLoading from "./hooks/useLoading";

function App() {
    const {loading} = useLoading();
  return (
    <div>
        <div>
            {
                loading ? "로딩중" : "완료"
            }
        </div>
     <h1>axios</h1>
    </div>
  )
}

export default App
