import {useState} from "react";

const UseLoading = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true)
    }

    const stopLoading = () => {
        setLoading(false)
    }

    const cancelLoading = () => {
        setLoading(false)
    }
    return {
        loading,
        startLoading,
        stopLoading,
        cancelLoading
    }
};

export default UseLoading;