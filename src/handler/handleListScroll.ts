import getCardScrollPosition from "../utils/list-card-scroll-helper";

export function handleListScroll(){
    const listCardProtein = document.querySelector('.list-card_protein');
    const listCardBroth = document.querySelector('.list-card_broth');

    const objList = {
        protein: {
            listCardSelector: '.list-card_protein',
            boxCardMarkerSelector: '.list-card-marker_protein'
        },

        broth: {
            listCardSelector: '.list-card_broth',
            boxCardMarkerSelector: '.list-card-marker_broth'
        }
    }

    if(listCardBroth){
        listCardBroth.addEventListener('scroll', () => getCardScrollPosition(objList.broth))
    }

    if (listCardProtein) {
        listCardProtein.addEventListener('scroll', () =>  getCardScrollPosition(objList.protein))
    }
}