import { ERadioName } from "../../ts/enum";
import { ICard } from "../../ts/interface";

const Card = (card: ICard, type: ERadioName ) => { 
    return `
        <label for=${card.name} id="label_${card.id}" class="card-option" >
            <input type="radio" id=${card.name} name=${type} value=${card.id} />

            <span class="card-image card-image_active" style="background-image: url(${card.imageActive})"></span>
            <span class="card-image card-image_inactive" style="background-image: url(${card.imageInactive})"></span>

            <h2 class="card-name">${card.name}</h2>

            <p class="card-subtitle">${card.description}</p>

            <span class="card-price">US$ ${card.price}</span>
        </label>
    `
}

export default Card;