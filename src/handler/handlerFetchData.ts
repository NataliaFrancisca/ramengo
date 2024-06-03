import ListCard from "../components/ListCard/ListCard";
import { fetchData } from "../service/api";
import { ERadioName } from "../ts/enum";

export async function handlerFetchData(){
    const { brothsResponse, proteinsResponse } = await fetchData();

    let fieldsetBroth = document.querySelector('.fieldset-component.broth');
    let fieldsetProteins = document.querySelector('.fieldset-component.protein');

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