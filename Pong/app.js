
function initializeBoard(){
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    $('#canvas').css('height', windowHeight);
    $('#middleLine').css('margin-left', windowWidth/2-20)
    $('#bat2').css('margin-left', windowWidth-80)
}

function moveBat(bat){
    var marginTop = parseInt($(bat).css('margin-top'))

    $('body').on('keydown', function(e){
        if(e.which == 87){
            if(marginTop >= -4){
                marginTop -= 10
                $(bat).css('marginTop', marginTop)
            }
        }
        else if(e.which == 83){
            if(marginTop <= 426){
                marginTop += 10
                $(bat).css('margin-top', marginTop)
            }
        }
    })
}

function moveBall(){

    $('.ball').animate({
        left:'780',
        top: '650'

    }, 3000)
}

$(document).ready(function(){

    initializeBoard();
    moveBat('#bat1');
    moveBall();
})
