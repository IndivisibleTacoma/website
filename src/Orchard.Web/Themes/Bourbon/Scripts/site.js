$('button#tgl').click(function () {
    $('.menu-main-menu').toggle();
});

$(window).resize(function () {
    var width = $(document).width();
    if (width > 707) {
        $('.menu-main-menu').show();
    }
    if (width <= 707) {
        $('.menu-main-menu').hide();
    }
});

(function () {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

//var parser = document.createElement('a');

//parser.href = window.location.href;

//var urlarray = parser.pathname.split("/");

//console.log(urlarray[0]);

var pathArray = window.location.pathname.split('/');

var secondLevelLocation = pathArray[1];

if (secondLevelLocation == "blog") {
    $("ul.menu-main-menu > li.current").removeClass("current");
    $("ul.menu-main-menu > li:nth-of-type(3)").addClass("current");
}


