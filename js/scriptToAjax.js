var counter = 1;
var pictures = ["winter", "lift", "cosmos"]
$(window).scroll(function () {
    if (counter < 15) {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 50
        ) {
            const url = "url('Source/" + ++counter + ".jpg')";
            $('.item').append('<div class="bg" style="background-image:' + url + '"></div>');
            if (counter === 15) $('.item').append('<footer id="foot" style="text-align: center" > <h3> Pictures from  <a href="https://www.bing.com"> Bing </a> and  <a href="https://www.unplash.com"> Unplash </a>  </h3> </footer>');
        }
    }
})
