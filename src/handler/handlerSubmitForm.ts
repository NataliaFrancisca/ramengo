import { postUserOrder } from "../service/api";

export async function handlerSubmitForm(event: SubmitEvent){
    event.preventDefault();

    const radioBroth = document.querySelector('input[name="broth"]:checked') as HTMLInputElement;
    const radioProtein = document.querySelector('input[name="protein"]:checked') as HTMLInputElement;

    if(radioBroth.value && radioProtein.value){
        const response = await postUserOrder({brothId: radioBroth.value, proteinId: radioProtein.value})

        if(response){
            window.location.href = "sucess.html";
        }
    }

}