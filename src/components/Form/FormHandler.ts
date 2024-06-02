import getCardScrollPosition from "../../utils/list-card-scroll-helper";

document.addEventListener('DOMContentLoaded', function() {
    var listCardMeat = document.querySelector('.list-card_meat');
    let listCardBroth = document.querySelector('.list-card_broth');

    const objList = {
        meat: {
            listCardSelector: '.list-card_meat',
            boxCardMarkerSelector: '.list-card-marker_meat'
        },

        broth: {
            listCardSelector: '.list-card_broth',
            boxCardMarkerSelector: '.list-card-marker_broth'
        }
    }

    if(listCardBroth){
        listCardBroth.addEventListener('scroll', () => getCardScrollPosition(objList.broth))
    }

    if (listCardMeat) {
        listCardMeat.addEventListener('scroll', () =>  getCardScrollPosition(objList.meat))
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn-form-lamen') as HTMLButtonElement;

    const radioBroth = document.querySelectorAll('input[name="broth"]');
    const radioMeat = document.querySelectorAll('input[name="meat"]');

    function checkRadioIsChecked (){
        const checkedBroth = Array.from(radioBroth).some(radio => (radio as HTMLInputElement).checked);
        const checkedMeat = Array.from(radioMeat).some(radio => (radio as HTMLInputElement).checked);

        button.disabled = !checkedBroth || !checkedMeat;
    }

    radioBroth.forEach(radio => radio.addEventListener('change', checkRadioIsChecked))
    radioMeat.forEach(radio => radio.addEventListener('change', checkRadioIsChecked))

    checkRadioIsChecked()
});


document.addEventListener('submit', (event) => {
    event.preventDefault();

    const radioBroth = document.querySelector('input[name="broth"]:checked') as HTMLInputElement;
    const radioMeat = document.querySelector('input[name="meat"]:checked') as HTMLInputElement;

    console.log(radioBroth.value);
    console.log(radioMeat.value);
})