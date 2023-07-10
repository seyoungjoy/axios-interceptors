import {AxiosError} from "axios";

export type Props = {
    error : Error | AxiosError,
    resetErrorBoundary? :() => void;
}

const ErrorFallback = ({error, resetErrorBoundary}:Props) => {
    return (
        <div>
            <h3>{error.message}</h3>
            {resetErrorBoundary && <button onClick={resetErrorBoundary}>다시 시도하기</button>}
        </div>
    );
};

export default ErrorFallback;