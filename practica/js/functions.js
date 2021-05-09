jQuery('document').ready(function($){
    
 
    var navBtn = $('#navegacion .nav-buttom'),
        menu = $('#navegacion .menu');
    
    navBtn.click(function(){
        if( menu.css('display') == 'none' ) { 
            $(this).addClass('open');
            menu.addClass('open');    
        } else { 
            $(this).removeClass('open');
            menu.removeClass('open');   
        } 
    });
    
    
    /*
    $('body').click(function(){
        $('.pagina').css('background', 'red');
    });
    */
    
});