$(document).ready(function(){
    $('body').children().hide();
    $('button').show();
    $('button').on('click', function(){
        $('body').children().slideDown();
        $(this).hide();
    });
    $('#slide').on('click', function(){
        $(this).slideToggle();
        $('button').show();
    });
});