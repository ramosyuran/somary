$(document).ready(function(){
    $("#wd").hover(
        function() {$(this).attr("src","img/webdesign.svg");},
        function() {$(this).attr("src","img/webdesign1.svg");
    });
    $("#wm").hover(
        function() {$(this).attr("src","img/webmobile.svg");},
        function() {$(this).attr("src","img/webmobile1.svg");
    });
    $("#ws").hover(
        function() {$(this).attr("src","img/websuporte.svg");},
        function() {$(this).attr("src","img/websuporte1.svg");
    });
    $("#mp").hover(
        function() {$(this).attr("src","img/marketing.svg");},
        function() {$(this).attr("src","img/marketing1.svg");
    });
    $("#o").hover(
        function() {$(this).attr("src","img/orientacao.svg");},
        function() {$(this).attr("src","img/orientacao1.svg");
    });
    $("#t").hover(
        function() {$(this).attr("src","img/traducao.svg");},
        function() {$(this).attr("src","img/traducao1.svg");
    });

});

$(document).ready(function(){
    $("#tt").hover(
        function() {$(this).attr("src","img/tt2.svg");},
        function() {$(this).attr("src","img/tt.svg");
    });
    $("#ti").hover(
        function() {$(this).attr("src","img/ti2.svg");},
        function() {$(this).attr("src","img/ti.svg");
    });
    $("#tc").hover(
        function() {$(this).attr("src","img/tc2.svg");},
        function() {$(this).attr("src","img/tc.svg");
    });
    $("#tv").hover(
        function() {$(this).attr("src","img/tv2.svg");},
        function() {$(this).attr("src","img/tv.svg");
    });

});

$(document).ready(function(){

    (function($) {

        $('#header__icon').click(function(e){
            e.preventDefault();
            $('body').toggleClass('with--sidebar');
        });

    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
    });

    })(jQuery);

});
