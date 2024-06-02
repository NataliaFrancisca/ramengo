import { ERadioName } from "../../ts/enum";
import { ICard } from "../../ts/interface";

const Card = (card: ICard, type: ERadioName ) => `
    <label for=${card.title} id="label_${card.id}" class="card-option">
        <input type="radio" id=${card.title} name=${type} value=${card.title} />

        <span class="card-image"></span>

        <h2 class="card-title">${card.title}</h2>

        <p class="card-subtitle">${card.description}</p>

        <span class="card-price">US$ ${card.price}</span>
    </label>
`

export default Card;