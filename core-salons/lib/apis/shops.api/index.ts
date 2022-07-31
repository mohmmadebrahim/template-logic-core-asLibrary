import { baseUrl, customApi } from "../../util";


export function ShopsApi<T>(arg: T): T {
    return arg;
}

ShopsApi.prototype.get = async () => {
    const data: any = await customApi({ url: `${baseUrl}/shops/top` }, { method: "GET" })
    return data ;
}


