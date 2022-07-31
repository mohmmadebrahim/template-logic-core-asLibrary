import { ServerUnexpectedError } from ".."

export async function ExternalApi(url: string) {
    const init: RequestInit = {}
    const headers: HeadersInit = {}
    headers['Content-Type'] = "application/json"
    headers['Accept'] = "application/json"
    init.headers = headers
    init.method = "GET"
    const request = await fetch(url, init)
    const response = request.json();
    return response.then((res) => {
        return res
    })
        .catch((err) => {
            throw new ServerUnexpectedError(err.message, err.statusCode)
        })
}