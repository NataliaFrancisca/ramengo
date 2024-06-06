import ListCard from "../components/ListCard/ListCard";
import { Loader } from "../components/Loader/Loader";
import { fetchData } from "../service/api";
import { ERadioName } from "../ts/enum";

export async function handlerFetchData(){
    let fieldsetBroth = document.querySelector('.fieldset-component.broth');
    let fieldsetProteins = document.querySelector('.fieldset-component.protein');

    fieldsetBroth!.innerHTML += `${Loader}`;
    fieldsetProteins!.innerHTML += `${Loader}`;

    const { brothsResponse, proteinsResponse } = await fetchData();

    if(brothsResponse && proteinsResponse){
        const loaderBroth = document.querySelector('.fieldset-component.broth > #loader') as HTMLElement;
        const loaderFieldset = document.querySelector('.fieldset-component.protein > #loader') as HTMLElement;

        fieldsetBroth?.removeChild(loaderBroth);
        fieldsetProteins?.removeChild(loaderFieldset);
    }

    if(fieldsetBroth){
        fieldsetBroth.innerHTML += `
            ${ListCard(brothsResponse, ERadioName.BROTH)}
        `
    }

    if(fieldsetProteins){
        fieldsetProteins.innerHTML += `
            ${ListCard(proteinsResponse, ERadioName.PROTEIN)}
        `
    }
}