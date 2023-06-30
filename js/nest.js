$(document).ready(function(){
    // customSlider(".sliderVideo",'horizontal','ease-in-out',true,false,false,false,false,false,true,true,1,1,3840,true,0,'bx-wrapper',true);
    customSlider(".sliderVCarousel",'vertical','ease-in-out',false,true,false,true,true,false,true,true,1,1,0,true,0,'bx-wrapper',false);
    customSlider(".indexContainer .sliderHCarousel",'horizontal','ease-in-out',false,true,false,true,true,false,true,true,4,1,380,true,60,'bx-wrapper',false);
    customSlider(".detailContainer .sliderHCarousel",'horizontal','ease-in-out',false,true,false,true,true,false,true,true,3,1,640,true,60,'bx-wrapper',false);
    customSlider(".sliderProduct",'horizontal','ease-in-out',false,true,'short',true,true,false,true,true,1,1,1280,true,0,'sliderList',false);
    
    toggleActive("input[value='wish']");
    toggleActive(".selectBox");
    toggleActive(".btn_filter");
    toggleActive("footer > div:first-of-type > div:nth-child(2) > h3");
    toggleActive("footer > div:first-of-type > div:nth-child(3) > h3");

    valueActive(".checkLabel input");
    valueActive(".labelComponent input");

    checkoutNextStep(".checkoutContainer [id$='Box']");
    goBack();
    nav();       
    close();
    dataSrc();
    tabMenu();
    countComponent();
    account();
    closeBG();
    textareaActive();
    panelControl(".meetTeamContainer > ul > li > input[type='button']");
    cardBg();
    fileCustom();
    colorSelect();
    numberOnly();
    btnTop();
    randomVideo();
});

function customSlider(slideName,slideMode,slideEasing,slideVideo,slidePager,slidePagerType,slideControls,slideAuto,slideAutoControls,slideAutoStart,slideAutoHover,slideMaxSlides,slideMinSlides,slideSlideWidth,slideShrinkItems,slideSlideMargin,slideWrapperClass,sliderRandom,sliderAuto){
    $(slideName).bxSlider({
        mode: slideMode,
        easing: slideEasing,
        video: slideVideo,
        pager: slidePager,
        pagerType: slidePagerType,
        controls: slideControls,
        auto: slideAuto,
        autoControls: slideAutoControls,
        autoStart: slideAutoStart,
        autoHover: slideAutoHover,
        maxSlides: slideMaxSlides,
        minSlides: slideMinSlides,
        slideWidth: slideSlideWidth,
        shrinkItems: slideShrinkItems,
        slideMargin: slideSlideMargin,
        wrapperClass: slideWrapperClass,
        randomStart: sliderRandom
    });
}

function checkoutNextStep(panel){
    var currentPanel = null;
    var currentForm = null;

    $(".checkoutContainer [id$='Box'] input[type='submit']").click(function(){
        currentForm = "#" + $(this).closest("form").attr("id");
        currentPanel = "#" + $(this).attr("data-nextstep");
        console.log(currentPanel);
        if (currentForm != null){
            $(currentForm).submit(function(e){
                e.preventDefault();
                $(panel).removeClass("active");
                $(currentPanel).addClass("active");
            });
        }
    });
    $(".checkoutContainer [id$='Box'] mark").click(function(){
        currentPanel = "#" + $(this).attr("data-nextstep");
        $(panel).removeClass("active");
        $(currentPanel).addClass("active"); 
    });
    $("label[for='acceptTerms']").click(function(){
        if(currentPanel == "#confirmBox"){
            $("#payNow").attr("disabled",false);
        }
    });
}

// location.href();-history
function goBack(){
    $(".goBack").click(function(){
        window.history.back();
    });
}

function nav(){
    $(window).scroll(function(){
        if($(window).scrollTop() == 0){
            $("header").removeClass("active");
        } else{
            $("header").addClass("active");
        }
    });
    
    if(window.matchMedia("(min-width: 1280px)").matches){
        $("header > div:first-child > nav > ul > li").mouseover(function(){
            $("header > div:first-child > nav > ul > li > ol").stop().slideDown();
            $("header").addClass("active");
        });
        $("header > div:first-child > nav").mouseleave(function(){
            $("header > div:first-child > nav > ul > li > ol").stop().slideUp();
            $("header").removeClass("active");
        });        
      }else{
        $("header > div:first-child > input[type='button']").click(function(){
            $("header").toggleClass("menuActive");
        });
      }
}

function close(){
    $(".panelSearch").click(function(){
        $("#search").addClass("active");
    });
    $(".panelClose").click(function(){
       $("#search").removeClass("active");
    });
}

function toggleActive(target){
    $(target).click(function(){
        switch(target){
            case ".btn_filter":
                $("#sortPanel").toggleClass("active");
                $(".btn_filter").toggleClass("active");
                break;
            default:
                $(this).toggleClass("active");
                break;
        }
    });
}

function dataSrc(){
    $(".listBox img").mouseover(function(){ 
        $(this).attr('src', $(this).attr('src').replace(".jpg","_hover.jpg"));
    });
    $(".listBox img").mouseleave(function(){ 
        $(this).attr('src', $(this).attr('src').replace("_hover.jpg",".jpg"));
    });
    $(".indexContainer > div:nth-of-type(6) img").mouseover(function(){ 
        $(this).attr('src', $(this).attr('src').replace(".jpg","_hover.jpg"));
    });
    $(".indexContainer > div:nth-of-type(6) img").mouseleave(function(){ 
        $(this).attr('src', $(this).attr('src').replace("_hover.jpg",".jpg"));
    });
}

function tabMenu(){
    $(".tabMenu > li").click(function(){        
        var activeTab = $(this).text();
        var activePage = "#"+activeTab;
        if(activeTab == "designed by"){
            activePage = "#"+"designedby";
        }
        $(".tabMenu > li").removeClass("active");
        $(this).addClass("active");

        $(".tabMenu ~ dl").removeClass("active");
        $(activePage).addClass("active");
    });
}

function account(){
    $(".panelFindPassword").click(function(){
        var block = $(this).attr("data-box");

        $(".loginContainer").removeClass("active");
        $(".findPasswordContainer").removeClass("active");
        $("." + block).addClass("active");
    });

    $(".panelCreateAcoount").click(function(){
        var block = $(this).attr("data-box");

        $(".loginContainer").removeClass("active");
        $(".createAccountContainer").removeClass("active");
        $("." + block).addClass("active");
    });

    $(".findPasswordContainer input[type='button']").click(function(){
        var block = $(this).attr("data-box");

        $(".findPasswordContainer").removeClass("active");
        $(".createAccountContainer").removeClass("active");
        $("." + block).addClass("active");
    });

    $(".createAccountContainer input[type='button']").click(function(){
        var block = $(this).attr("data-box");

        $(".findPasswordContainer").removeClass("active");
        $(".createAccountContainer").removeClass("active");
        $("." + block).addClass("active");
    });
}

function countComponent(){
    $(".countComponent > input[value='subtract']").click(function(){        
        var count = $(this).parent(".countComponent").children("span").text();
        var num = Number(count);

        num--;
        if(num<=0){
            num=1;
        }
        $(this).parent(".countComponent").children("span").text(num);
    });

    $(".countComponent > input[value='add']").click(function(){
        var count = $(this).parent(".countComponent").children("span").text();
        var num = Number(count);

        num++;
        if(num>=99){
            num=99;
        }
        $(this).parent(".countComponent").children("span").text(num);
    });
}

function valueActive(target){
    $(target).on("input",function(){
        var attrValue = $(this).val();
        var currentTarget = $(this).parent();
        if(attrValue != ""){
            currentTarget.addClass("valueActive");
        }else{
            currentTarget.removeClass("valueActive");
        }
    });
}

function closeBG(){
    $(".basketContainer > div:first-of-type > ul > li > input[type='button']").mouseover(function(){
        $(this).parent().addClass("active");
    });
    $(".basketContainer > div:first-of-type > ul > li > input[type='button']").mouseleave(function(){
        $(this).parent().removeClass("active");
    });
}

function panelControl(btn){
        var currentPanel = null;
        $(btn).click(function(){
            currentPanel = "#" + $(this).attr("data-popname");
            $(currentPanel).addClass("active");
        });
        $(".panelClose").click(function(){
            $(currentPanel).removeClass("active");
        });
}

function textareaActive(){
    $(".txtContainer.errorsContainer > form > fieldset:first-of-type > textarea").mouseover(function(){
        $("label[for='message']").addClass("active");
    });
    $(".txtContainer.errorsContainer > form > fieldset:first-of-type > textarea").mouseleave(function(){
        $("label[for='message']").removeClass("active");
    });

    
    $(".txtContainer.errorsContainer > form > fieldset:first-of-type > textarea").keyup(function(){
        var attrValue = $(this).val();
        var currentTarget = $("label[for='message']");
        if(attrValue != ""){
            currentTarget.addClass("valueActive");
            $(this).addClass("valueActive");
        }else{
            currentTarget.removeClass("valueActive");
            $(this).removeClass("valueActive");
        }
    });
}

function cardBg(){
    $(".checkoutContainer > div#paymentBox > form > fieldset > div:first-of-type > input:first-of-type").keyup(function(){
        var cardNum = $(this).val().substring(0,1);
        var card = $(".checkoutContainer > div#paymentBox > form > fieldset");

        switch(cardNum){
            case "4" :
                card.css("background-image","url('https://uandm4.github.io/nest/images/card_visa.svg')");
                break;
            case "5" :
                card.css("background-image","url('https://uandm4.github.io/nest/images/card_master.svg')");
                break;
            default:
                card.css("background-image","url('https://uandm4.github.io/nest/images/card_american.svg')");
                break;
        }
    });
}

function fileCustom(){
    $("#file").on('change',function(){
        var fileName = $("#file").val();
        $("label[for='file']").text(fileName).addClass("active").css({"background-color":"#474747","color":"#fff"});
        $(".txtContainer.errorsContainer > form > fieldset:last-of-type > input[type='submit']").removeAttr("disabled");
      });
}

function colorSelect(){
    var color = $(".detailContainer > div:nth-child(2) > form > fieldset:nth-of-type(1) > input");
    var colorLength = color.length;

    if(window.matchMedia("(max-width: 767px)").matches){
        if(colorLength > 3){
            $(".detailContainer > div:nth-child(2) > form > fieldset:nth-of-type(1)").css("top","120vw");
        }
    }
}

function numberOnly(){
    $("input:text[numberOnly]").on("keyup", function(){
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });
}

function btnTop(){
    $(".btnTop > img").click(function(){
        $("html").animate({
            scrollTop : 0
        }, 400);
        return false;
    });
}

function randomVideo(){
    var video = $(".indexContainer > div > .sliderVideo > li");
    var videoLength = video.length;
    var currentIndex = Math.floor(Math.random()*videoLength) + 1;

    video.css("display","none");
    $(".indexContainer > div > .sliderVideo > li:nth-of-type(" + currentIndex + ")").css("display","block");
}