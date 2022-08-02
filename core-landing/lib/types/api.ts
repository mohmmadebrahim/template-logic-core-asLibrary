
export declare type TFetchMethod = "GET" | "POST" | "PUT" | "DELETE" | "UPDATE";
export declare type TApiInputRequired = {
    url: string,
}
export declare type TApiInputOptional = {
    body: any,
    token: boolean,
    formData?: boolean,
    method?: TFetchMethod,
    successMes?: any,
    errorMes?: any,
    messageConfig?: any,
    unexpectedMess?: any
}


