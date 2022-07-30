import { ApiInputOptional, ApiInputRequired } from "../../types"
import { ServerError, getToken } from ".."

export async function customApi(required: Required<ApiInputRequired>, optional: Partial<ApiInputOptional>) {
    const init: RequestInit = {}
    const headers: HeadersInit = {}
    if (optional.token) headers['Authorization'] = await getToken() ?? ""
    if (optional.method !== "GET") init.body = optional.body
    if (optional.formData) {
        // headers['Content-Type'] = "multipart/form-data"
    } else {
        headers['Content-Type'] = "application/json"
        headers['Accept'] = "application/json"
    }
    init.headers = headers
    init.method = optional.method ?? "GET"
    if (!navigator.onLine) {
        // setTimeout(() => {
        //     return alert("Internet Connection Lost")
        // }, 1000)
    }
    const request = await fetch(required.url, init)
    const response = request.json();

    return response.then((res) => {
        //todo toast must be show message from server
        if (res.result) {
            return res.data
        } else  {          
            throw new ServerError(res.message);
        }
    })
}
