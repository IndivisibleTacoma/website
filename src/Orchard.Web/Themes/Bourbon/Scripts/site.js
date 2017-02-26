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

$(document).ready(function () {
    $('#library .meeting-materials > button').removeAttr("aria-expanded aria-controls");
    $('#library .doclist').removeAttr("aria-hidden").removeClass('usa-accordion-content');
    $('#library, .widget-meetingmaterials').find("a").attr("target", "_blank");
    $("img:not([title])").each(function () {
        if ($(this).attr("alt") != '') $(this).parent().attr("title", $(this).attr("alt"))
        else $(this).parent().attr("title", $(this).attr("src"));
    });

});

