import React, { ReactNode} from "react";
interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}
class ErrorBoundary extends React.Component<Props, State> {
    state:State = {
        hasError:false
    }

    static getDerivedStateFromError(_: Error):State {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true };
    }

    componentDidCatch(error:Error) {
        console.error(`error boundary : ${error.message}`)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;