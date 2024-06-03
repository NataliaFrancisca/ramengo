import { postUserOrder } from "../service/api";
import { ISuccessResponse } from "../ts/interface";

export async function handlerSubmitForm(event: SubmitEvent){
    event.preventDefault();

    const radioBroth = document.querySelector('input[name="broth"]:checked') as HTMLInputElement;
    const radioProtein = document.querySelector('input[name="protein"]:checked') as HTMLInputElement;

    if(radioBroth.value && radioProtein.value){
        const response = await postUserOrder({brothId: radioBroth.value, proteinId: radioProtein.value})

        if(response){
            const encodedResponse = JSON.stringify(response as ISuccessResponse);
            localStorage.setItem('RAMENGO_ORDER', encodedResponse);
            window.location.href = "success.html"
        }
    }

}