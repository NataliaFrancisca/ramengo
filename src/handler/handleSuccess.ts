import { ISuccessResponse } from "../ts/interface";

const localStorageResponse = localStorage.getItem('RAMENGO_ORDER');


document.addEventListener("DOMContentLoaded", () => {
    const orderImage = document.getElementById('order-data');

    if(localStorageResponse && orderImage){
        const orderData = JSON.parse(localStorageResponse) as ISuccessResponse;

        orderImage.innerHTML += `
            <img src="${orderData.image}"></img>
            <label>Your Order:</label>
            <h2>${orderData.description}</h2>
        `
    }
   
});