import { ERadioName } from "../../ts/enum";
import { ICard } from "../../ts/interface";
import Card from "../Card/Card"

const ListCard = (list: {data: Array<ICard>} , type: ERadioName) => {
    return `
        <section class="section-list-card ${type}">
            <article class="list-card list-card_${type}">
                ${list.data.map((broth) => `${Card(broth, type)}`).join('')}
            </article>

            <article class="list-card-marker list-card-marker_${type}">
                <div class="list-marker-dot current-card"></div>
                <div class="list-marker-dot"></div>
                <div class="list-marker-dot"></div>
            </article>
        </section>
    `
}

export default ListCard;


