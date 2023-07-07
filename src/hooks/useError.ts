import {useState} from "react";

type Alert = {
    type:string;
    message:string;
}
const useError = () => {
    const [alertMessage, setAlertMessage] = useState<Alert>({type:"", message:""})

    return {
        alertMessage,
        setAlertMessage
    }
}

export default useError;