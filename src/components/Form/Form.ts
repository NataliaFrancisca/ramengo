import { handleListScroll } from '../../handler/handleListScroll';
import { handlerRadioInput } from '../../handler/handleRadioInput';
import { handlerFetchData } from '../../handler/handlerFetchData';
import { handlerSubmitForm } from '../../handler/handlerSubmitForm';

document.addEventListener('DOMContentLoaded', async() => {
    await handlerFetchData();
    handlerRadioInput();
    handleListScroll();
});

document.addEventListener('submit', async(event) => {
    await handlerSubmitForm(event);
})

const Form = `
    <form id="form-lamen" action="POST">

        <fieldset class="fieldset-component broth">
            <legend class="fieldset-legend">First things first: select your favorite broth.</legend>
            <span class="fieldset-description">It will give the whole flavor on your ramen soup. </span>
        </fieldset> 

        <fieldset class="fieldset-component protein">
            <legend class="fieldset-legend">It’s time to choose (or not) your protein!.</legend>
            <span class="fieldset-description">Some people love, some don’t. We have options for all tastes. </span>
        </fieldset>

        <button class="button" id="btn-form-lamen" type="submit">
            PLACE MY ORDER
        </button>
    </form>
`;

export default Form;