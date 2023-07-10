import { Component, ComponentType, PropsWithChildren } from 'react';
import {AxiosError} from "axios";

export interface FallbackProps {
    error: Error | AxiosError;
    resetErrorBoundary?: () => void;
}

interface ErrorBoundaryProps {
    fallback: ComponentType<FallbackProps>;
    onReset?: () => void;
}

interface ErrorBoundaryState {
    error: Error | AxiosError | null;
}

const initialState: ErrorBoundaryState = {
    error: null,
};

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        error: null,
    };

    resetErrorBoundary = () => {
        this.props.onReset?.();
        this.setState(initialState);
    };

    static getDerivedStateFromError(error: Error | AxiosError): ErrorBoundaryState {
        return { error };
    }

    render() {
        const { fallback: FallbackComponent } = this.props;

        if (this.state.error) {
            return (
                <FallbackComponent error={this.state.error} resetErrorBoundary={this.resetErrorBoundary} />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;