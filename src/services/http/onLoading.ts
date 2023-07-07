import UseLoading from "../../hooks/useLoading";

const onLoading = async (type: string) => {
    const {startLoading, stopLoading, cancelLoading} = UseLoading();
    switch (type){
        case "request" :
            startLoading();
            break;
        case "response" :
            stopLoading();
            break;
        case"error" :
            cancelLoading();
            break;
        default:break;
    }
    return Promise.resolve();
}

export default onLoading;