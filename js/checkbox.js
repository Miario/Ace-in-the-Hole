/**
 * Created by Mark on 8/25/2017.
 */
$('.subscriber').on('change', function(){
    var noChecked = 0;
    $.each($('.subscriber'), function(){
        if($(this).is(':checked')){
            noChecked++;
        }
    });
    if(noChecked >= 1){
        $.each($('.subscriber'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');
            }
        });
    }else{
        $('.subscriber').removeAttr('disabled');
    };
});
$('.single').on('change', function(){
    var noChecked = 0;
    $.each($('.single'), function(){
        if($(this).is(':checked')){
            noChecked++;
        }
    });
    if(noChecked >= 1){
        $.each($('.single'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');
            }
        });
    }else{
        $('.single').removeAttr('disabled');
    };
});