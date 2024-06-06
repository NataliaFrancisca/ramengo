import { ISuccessResponse } from "../ts/interface";

const sessionStorageResponse = sessionStorage.getItem('RAMENGO_ORDER');

document.addEventListener("DOMContentLoaded", () => {

    if(!sessionStorageResponse){
        alert('Hey! You have to request your order :)');
        window.location.href = "index.html"
    }

    const orderImage = document.getElementById('order-data');

    if(sessionStorageResponse && orderImage){
        const orderData = JSON.parse(sessionStorageResponse) as ISuccessResponse;

        orderImage.innerHTML += `
            <img src="${orderData.image}"></img>
            <label>Your Order:</label>
            <h2>${orderData.description}</h2>
        `
    }
   
});