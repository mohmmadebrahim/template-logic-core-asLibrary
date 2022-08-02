import { TContact, TContactResponse } from "../../types";
import { baseUrl, customApi } from "core";

export const ContactApi = async (body: TContact) : Promise<TContactResponse> => {
    // const data = await customApi({ url: `${baseUrl}/auth/login` }, { method: "POST", body: postData })
    return {status : true, message: " Your Request Sent Successfully"};
}