var mapPlace = true;
function createRequest(k) {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', k);
    myRequest.onreadystatechange = function () {
        if (myRequest.readyState === 4) {
            document.getElementById('contentToRead').innerHTML = myRequest.responseText;
        }
    };
    myRequest.send();
}

function loadOpis() {
   createRequest('opis.html');
    $(window).trigger('resize.px.parallax');

}

function createRequestToPolozenie() {
    var htmlToplace;
    if (mapPlace === true) {
        document.getElementById('location').style.height = "600px";
        htmlToplace = 'polozenie.html';
        mapPlace = false;
        document.getElementById('location').style.display = "block";
        var myRequest = new XMLHttpRequest();
        myRequest.open('GET', htmlToplace);
        myRequest.onreadystatechange = function () {
            if (myRequest.readyState === 4) {
                document.getElementById('location').innerHTML = myRequest.responseText;
            }
        };
        myRequest.send();
        $(window).trigger('resize.px.parallax');
    }
    else {
        document.getElementById('location').style.display = "none";
        document.getElementById('location').innerHTML = "";
        $(window).trigger('resize.px.parallax');
        mapPlace = true;
    }



}