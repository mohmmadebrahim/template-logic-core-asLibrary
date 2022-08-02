import { ContactApi } from "../../apis";
import { TContact, TContactResponse } from "../../types";
import { isInvalidAddress } from "../../util";

export const sendContact = async (e: any): Promise<TContactResponse> => {
    e.preventDefault()
    if(isInvalidAddress(e.target[1].value)) return {message:"Invalid Email", status:false}
    const form: any = document.getElementById("contactForm")
    form?.reset()
    const body:TContact = {
        name: e.target[0].value,
        email:e.target[1].value,
        message:e.target[2].value
    }
    return ContactApi(body);
}