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

    //============= PROJECTS FUNCTIONALITY =========================>
    var images = [1,2,3];

    var hideImages = function(){
        var i = 1;
        for(i;i<=12;i++){
            var image = "#img"+ String(i);
            $(image).hide();
        }
    };


    var showImages = function(images){
        var i = 0;
        var id = '#img';
        console.log('\n');
        for(i;i<3;i++){
            $(id+images[i]).show();
        }
    };

    var cycleForward = function(images){
        images[0]++;
        images[1]++;
        images[2]++;
        if(images[2] >10){
            images[0] = 1;
            images[1] = 2;
            images[2] = 3;
        }
    };

    var cycleBack = function(images){
        images[0] --;
        images[1] --;
        images[2] --;
        if(images[0] < 1){
            images[0] = 8;
            images[1] = 9;
            images[2] = 10;
        
        }
    };

    //==================== Skills Functionality =====================>

    var listSkills = function(){
        var skills = [
            '<li class="slideDown col-md-2 col-md-offset-2" >HTML5</li>',
            '<li class="slideDown col-md-2 " >CSS3</li>',
            '<li class="slideDown col-md-2 " >JavaScript</li>',
            '<li class="slideDown col-md-2 " >jQuery</li>',
            '<li class="slideDown col-md-2 col-md-offset-2" >AngularJS</li>',
            '<li class="slideDown col-md-2 " >Responsive Design</li>',
            '<li class="slideDown col-md-2 " >Database Optimization</li>',
            '<li class="slideDown col-md-2 " >Cross Browser Compatibility</li>',
            '<li class="slideDown col-md-2 col-md-offset-2" >PHP</li>',
            '<li class="slideDown col-md-2 " >Python</li>',
            '<li class="slideDown col-md-2 " >mySQL</li>',
            '<li class="slideDown col-md-2 " >Google App Engine</li>',
            '<li class="slideDown col-md-2 col-md-offset-2" >Audio / Video Editing</li>',
            '<li class="slideDown col-md-2 " >Object Oriented Programming</li>',
            '<li class="slideDown col-md-2 " >Animation</li>',
            '<li class="slideDown col-md-2 " >SEO</li>'
        ];
        var i = 0;

        setInterval(function(){

            $('#skill-set').animate({opacity: 0}, 500, function(){
                $(this).html(skills[i] + skills[i+1] + skills[i+2] + skills[i+3]);
            }).animate({opacity: 1}, 500);
            if(i == skills.length -4){
                i = 0
            }else{
                i += 4;
                console.log(i);
            }

        }, 4000);
        
    };

    //============== H2 WORD BANNER ===============>
    var wordCycle = function(){
        var words = ["Front-End", "Back-End", "Designer / Developer"];
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
        hideImages();
        showImages(images);
        smoothScroll();
        wordCycle();
        listSkills();
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