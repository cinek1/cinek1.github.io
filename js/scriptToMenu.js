
function moveTo(dest) {


    if (dest === '#location') {
        if (mapPlace === true)
            createRequestToPolozenie();
            window.location = dest;

    }
    else if (dest.concat("#location")){

        window.location = dest;
        createRequestToPolozenie();

    }
    else  window.location = dest;

}

