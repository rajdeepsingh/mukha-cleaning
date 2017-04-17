// https://jsfiddle.net/Guruprasad_Rao/xya6gs93/1/

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);
        $offset = $target.offset();
        $offsetTop = $offset.top - 100;

        $('html, body').stop().animate({
            'scrollTop':  $offsetTop
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('body').scrollspy({ target: '#nav-right' })
});

