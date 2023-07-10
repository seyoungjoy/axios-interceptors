import axios, {AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";

const logOnDev = (message:string) => {
    if(import.meta.env.DEV){
        console.log(message)
    }

}
export const onRequest = (config:InternalAxiosRequestConfig) => {
    const {method = "GET", url = ""} = config;

    logOnDev(`🚀 [API] ${method.toUpperCase()} ${url} | Request`);
    return config;
}

export const onResponse = (response:AxiosResponse) => {
    const {method = "GET", url = ""} = response.config;
    const {status} = response;

    logOnDev(`🚀 [API] ${method.toUpperCase()} ${url} | Request ${status}`);
    return response;
}

export const onErrorResponse = (error:AxiosError | Error): Promise<AxiosError> => {
    if(axios.isAxiosError(error)){
        const {message} = error;
        const {method="GET", url=""} = error.config as AxiosRequestConfig;
        const {status, statusText} = error.response as AxiosResponse;

        logOnDev(
            `🚨 [API] ${method.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`
        )
        // switch (status){
        //     case 401:{
        //         console.error("로그인이 필요합니다.")
        //         break;
        //     }
        //     case 403: {
        //         console.error("권한이 없습니다.")
        //         break;
        //     }
        //     case 404:{
        //         console.error("잘못된 요청입니다.")
        //         break;
        //     }
        //     case 500:{
        //         console.error("서버에 문제가 발생했습니다.")
        //         break
        //     }
        //     default:{
        //         console.error("알 수 없는 오류가 발생했습니다..")
        //         break
        //     }
        // }
    } else {
        `🚨 [API] | Error ${error.message}`
        console.error(error.message)
    }

    return Promise.reject(error);
}
