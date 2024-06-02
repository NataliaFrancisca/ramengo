const apiKey = import.meta.env.VITE_API_KEY;

async function getData(){

    const [brothsResponse, proteinsResponse] = await Promise.all([
        await fetch('https://api.tech.redventures.com.br/broths', {
            headers: {
                "x-api-key": apiKey
            }
        }).then((data) => {

            if(data){
                return data.json();
            }

        }),
    
        await fetch('https://api.tech.redventures.com.br/proteins', {
            headers: {
                "x-api-key": apiKey
            }
        }).then((data) => {
            if(data){
                return data.json();
            }
        })
    ])

    console.log(brothsResponse);
    console.log(proteinsResponse);
}


async function sendOrder(order: {brothId: string, proteinId: string}){

    const response = await fetch('https://api.tech.redventures.com.br/order', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "x-api-key": apiKey,
            "Content-type": "application/json; charset=UTF-8"
        },
    })


    console.log('RESPONSE POST', response.json())

}


document.addEventListener('DOMContentLoaded', function() {
    getData();
    // sendOrder();
})