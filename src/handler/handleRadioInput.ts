export function handlerRadioInput(){
    const button = document.getElementById('btn-form-lamen') as HTMLButtonElement;

    const radioBroth = document.querySelectorAll('input[name="broth"]');
    const radioProtein = document.querySelectorAll('input[name="protein"]');

    const checkRadioIsChecked = () => {
        const checkedBroth = Array.from(radioBroth).some(radio => (radio as HTMLInputElement).checked);
        const checkedProtein = Array.from(radioProtein).some(radio => (radio as HTMLInputElement).checked);
    
        button.disabled = !checkedBroth || !checkedProtein;
    }

    radioBroth.forEach(radio => radio.addEventListener('change', checkRadioIsChecked))
    radioProtein.forEach(radio => radio.addEventListener('change', checkRadioIsChecked))

    checkRadioIsChecked()
}




