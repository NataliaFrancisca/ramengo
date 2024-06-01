type TFunctionScroll = {
    listCardSelector: string,
    boxCardMarkerSelector: string
}

function getCardScrollPosition(obj: TFunctionScroll){
    const listOfCard = document.querySelector(obj.listCardSelector) as HTMLElement;
    const boxCardMarker = document.querySelector(obj.boxCardMarkerSelector) as HTMLElement;

    const selectorSize = listOfCard.clientWidth;
    const currentSize = listOfCard.scrollLeft + selectorSize;

    const boxCardMarkerChildrens = [...boxCardMarker.children]; 

    const cleanBoxCardMarkerClasses = () => {
        boxCardMarkerChildrens.map((marker) => marker.classList.remove('current-card'))
    }

    if(currentSize >= selectorSize && currentSize <= (selectorSize * 1.6)){
        cleanBoxCardMarkerClasses();
        boxCardMarkerChildrens[0].classList.add('current-card');
    }

    if(currentSize >= (selectorSize * 1.6 ) && currentSize <= (selectorSize * 2)){
        cleanBoxCardMarkerClasses();
        boxCardMarkerChildrens[1].classList.add("current-card");
    }

    if(currentSize >= (selectorSize * 2)){
        cleanBoxCardMarkerClasses();
        boxCardMarkerChildrens[2].classList.add("current-card");
    }
}

export default getCardScrollPosition;