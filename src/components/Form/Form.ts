import listBroth from '../../db/broth.json';
import listMeats from '../../db/meat.json';

import { ERadioName } from "../../ts/enum";
import ListCard from "../ListCard/ListCard";

import './FormHandler';
import './ApiHandler';


const Form = `
    <form id="form-lamen" action="POST">

        <fieldset class="fieldset-component broth">
            <legend class="fieldset-legend">First things first: select your favorite broth.</legend>
            <span class="fieldset-description">It will give the whole flavor on your ramen soup. </span>
        
            ${ListCard(listBroth, ERadioName.BROTH)}
        </fieldset> 

        <fieldset class="fieldset-component meat">
            <legend class="fieldset-legend">It’s time to choose (or not) your meat!.</legend>
            <span class="fieldset-description">Some people love, some don’t. We have options for all tastes.  </span>

            ${ListCard(listMeats, ERadioName.MEAT)}
        </fieldset>

        <button class="button" id="btn-form-lamen" type="submit">
            PLACE MY ORDER
        </button>
    </form>
`;

export default Form;