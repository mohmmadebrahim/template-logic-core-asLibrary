import { baseUrl, customApi } from "../../util";

export const LoginAPi = async (e: any) => {
    let postData = JSON.stringify({
        'email': e.target[0].value,
        'password': e.target[1].value,
        'client': "app"
    })
    const data = await customApi({ url: `${baseUrl}/auth/login` }, { method: "POST", body: postData })
    return data;
}