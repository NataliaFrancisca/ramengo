import ListCard from "../components/ListCard/ListCard";
import { Loader } from "../components/Loader/Loader";
import { fetchData } from "../service/api";
import { ERadioName } from "../ts/enum";

export async function handlerFetchData(){
    let fieldsetBroth = document.querySelector('.fieldset-component.broth');
    let fieldsetProteins = document.querySelector('.fieldset-component.protein');

    const { brothsResponse, proteinsResponse } = await fetchData();

    if(!brothsResponse || !proteinsResponse){
        fieldsetBroth!.innerHTML += `<p class="error-message">I am sorry! Something got wrong, try later :)</p>`
        fieldsetProteins!.innerHTML +=  `<p class="error-message">I am sorry! Something got wrong, try later :)</p>`
        return;
    }

    fieldsetBroth!.innerHTML += `${Loader}`;
    fieldsetProteins!.innerHTML += `${Loader}`;

    const loaderBroth = document.querySelector('.fieldset-component.broth > #loader') as HTMLElement;
    const loaderFieldset = document.querySelector('.fieldset-component.protein > #loader') as HTMLElement;

    fieldsetBroth?.removeChild(loaderBroth);
    fieldsetProteins?.removeChild(loaderFieldset);

    fieldsetBroth!.innerHTML += `${ListCard(brothsResponse, ERadioName.BROTH)}`
    fieldsetProteins!.innerHTML += `${ListCard(proteinsResponse, ERadioName.PROTEIN)}`
}