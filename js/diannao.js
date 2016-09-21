/**
 * Created by Hello on 2016/9/19.
 */

$(function () {
    $('#search input').on('focus', function () {
        $(this).css('paddingLeft','7%');
        $('#search form a').css('left','4%');
    }).on('blur', function () {
        console.log($(this).val().length);
        if($(this).val().length==0){
            $(this).css('paddingLeft','46%');
            $('#search form a').css('left','40%');
        }
    })
})





























