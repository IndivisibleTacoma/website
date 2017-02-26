$(function () {

    // TO TOP BUTTON
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn()
        }
        else {
            $("#toTop").fadeOut()
        }
    });

    $("#toTop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 1000)
    })

    // FORM VALIDATION CLASSES
    $('.input-validation-error').parent().addClass('has-error');
    $('.validation-summary-errors').addClass('has-error');
    $('.validation-summary-errors span').addClass('control-label');
    $('.validation-summary-errors li').addClass('control-label');
    $('.field-validation-error').addClass('control-label');

    // PAGINATION
    $('#pagination ul').removeClass('pager').addClass('pagination');


    // ====================Pageheader=======================
    var activelink = $(".breadcrumbs > li.active").html();

    if (typeof activelink != "undefined") {
        $(".page-header").append('<h1>' + activelink + '</h1>');
    }

    //===================Next Nav==========================
    var next_link_full = $(".breadcrumbs > li.active").next().html();

    if (typeof next_link_full != "undefined") {
        var next_link_array = next_link_full.split('"');
        var next_link = next_link_array[1];
    }

    var next_active_sublink_full = $(".widget-sub-header .breadcrumbs > li.active").next().html();

    if (typeof next_active_sublink_full != "undefined") {
        var next_active_sublink_array = next_active_sublink_full.split('"');
        var next_active_sublink = next_active_sublink_array[1];
    }

    var first_sublink_full = $(".widget-sub-header .breadcrumbs > li.first").html();

    if (typeof first_sublink_full != "undefined") {
        var first_sublink_array = first_sublink_full.split('"');
        var first_sublink = first_sublink_array[1];
    }


    var last_sublink_active = $(".widget-sub-header .breadcrumbs > li.active.last").html();

    var widget_subheader = $(".widget-sub-header").html();

    //Next button

    if (typeof widget_subheader === "undefined") {//if there is not a subnavigation, 'next' button navigates through main nav
        var last_link_active = $(".widget-navigation > .breadcrumbs > li.active.last").html();
        if (typeof last_link_active === "undefined") {
            //Next button
            $(".nxt_btn").append('<div class="wiz-buttons"><a class="next" href="' + next_link + '"><span class="arrow"></span><span class="button">Next</span></a></div>');
            //Next link
            $("#layout-content").append('<p class="nxt_lnk"><a href="' + next_link + '">Next page</a></p>');
        }

    } else {
        if (typeof last_sublink_active != "undefined") {//if user is at the last sublink, navigate to the next item in main navigation
            //Next button
            $(".nxt_btn").append('<div class="wiz-buttons"><a class="next" href="' + next_link + '"><span class="arrow"></span><span class="button">Next</span></a></div>');
            //Next link
            $("#layout-content").append('<p class="nxt_lnk"><a href="' + next_link + '">Next page</a></p>');
        }
        else if (typeof next_active_sublink != "undefined") {//if there is subnavigation navitate to the next item in subnavigation
            //Next button
            $(".nxt_btn").append('<div class="wiz-buttons"><a class="next" href="' + next_active_sublink + '"><span class="arrow"></span><span class="button">Next</span></a></div>');
            //Next link
            $("#layout-content").append('<p class="nxt_lnk"><a href="' + next_active_sublink + '">Next page</a></p>');
        }
        else if (typeof next_active_sublink === "undefined") {//if user is at an index page with subnavigation, navigate to the first item in subnavigation
            //Next button
            $(".nxt_btn").append('<div class="wiz-buttons"><a class="next" href="' + first_sublink + '"><span class="arrow"></span><span class="button">Next</span></a></div>');
            //Next link
            $("#layout-content").append('<p class="nxt_lnk"><a href="' + first_sublink + '">Next page</a></p>');
        }
    }

    //Sign in form submission clicks to next page. 
    var sitename = window.location.href;
    var sitename = sitename.replace(/\/$/, '');

    $(".signin").prepend('<input type="hidden" name="returnurl" value="' + sitename + next_link + '" />');

    //---------------footer--------------
    // Hide and show address
    $("input.tog").click(function () {
        $(".hide_address").toggleClass("show_address");
    });

});

//PJS.Bootstrap header resize and sticky footer fix on window resize fix
$(window).resize(function () {
    $('.navbar-wrapper .navbar-fixed-top').parent('div').next('div').css('margin-top', ($('.navbar-fixed-top').height() + 0) + 'px');
    
    if ($('html').hasClass('sticky-footer')) {
        var footerHeight = $('#layout-footer').height();

        $('body').css('margin-bottom', footerHeight + 'px');
    }
});

