const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchData(){

    const [brothsResponse, proteinsResponse] = 
    
    await Promise.all([
        await fetch('https://api.tech.redventures.com.br/broths', {
            headers: {
                "x-api-key": API_KEY
            }
        }).then((data) => {
            if(data){
                return data.json()
            }
        }).catch((error) => {
            console.log("ERROR", error);
            return false;
        }),
    
        await fetch('https://api.tech.redventures.com.br/proteins', {
            headers: {
                "x-api-key": API_KEY
            }
        }).then((data) => {
            if(data){
                return data.json();
            }
        }).catch(error => {
            console.log("ERROR", error);
            return false;
        })
    ])


    return { brothsResponse, proteinsResponse };
}


export async function postUserOrder(order: {brothId: string, proteinId: string}){

    const response = await fetch('https://api.tech.redventures.com.br/order', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "x-api-key": API_KEY,
            "Content-type": "application/json; charset=UTF-8"
        },
    })

    if(response.ok){
        return await response.json();
    }

    return 'something got wrong'
}


