(function($){

    //============== Page Load ====================================>
    var pageLoad = function(){
        var header = $('header');
        var h1 = $('h1');
        var h2 = $('h2');
        var downArrow = $('.down-arrow');

        h1.animate({opacity: 0}, 0);
        h2.animate({opacity: 0}, 0);
        downArrow.animate({opacity: 0}, 0);

        setTimeout(function(){
            h1.addClass('bigEntrance').animate({opacity: 1}, 0);
        }, 500);
        setTimeout(function(){
            h2.addClass("fadeIn").animate({opacity: 1}, 0);
        },1000);
        setTimeout(function(){
            downArrow.addClass("expandUp").animate({opacity: 1}, 0);
        },1500);

    };

    //================ SideBar Functionality ==================>
    var sidebarActions = function(){
        $('.home-but, .about-but, .projects-but, .contact-but').on('click', function(e){
            $('input#sidebar-toggle').attr('checked', false);
        });
    };

    

    //============== H2 WORD BANNER ===============>
    var wordCycle = function(){
        var words = ["Design and Branding", "Search Engine Optimization", "Full Stack Developer"];
        var i = 0;
        setInterval(function(){
            var word = words[i];
            $('#word-banner').animate({opacity: 0}, 600, function(){
                $(this).html(word);
            }).animate({opacity: 1}, 600);
            if(i == words.length -1){
                i = 0
            }else{
                i++;
            }
        }, 5000);
    };

    // ========== SMOOTH SCROLLING ============>
    function smoothScroll(){
        $('a[href*=#]:not([href=#])').on('click', function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }

            e.preventDefault();
            return false;
        });
    }


    //============== INIT ==================>
    function init(){
        pageLoad();
        smoothScroll();
        wordCycle();
        sidebarActions();


        // event listeners
        $('#forward-button').on('click', function(e){
            cycleForward(images);
            hideImages();
            showImages(images);

            e.preventDefault();
            return false;
        });

        $('#back-button').on('click', function(e){
            cycleBack(images);
            hideImages();
            showImages(images);

            e.preventDefault();
            return false;
        });
    }

        init();

})(jQuery);