$(document).ready(function(){
    $('.count').prop('disabled', true);
       $(document).on('click','.plus',function(){
        $('.count').val(parseInt($('.count').val()) + 1 );
    });
    $(document).on('click','.minus',function(){
        $('.count').val(parseInt($('.count').val()) - 1 );
            if ($('.count').val() == -1) {
                $('.count').val(0);
            }
        });
 });

 $(document).ready(function(){
    $('.count1').prop('disabled', true);
       $(document).on('click','.plus1',function(){
        $('.count1').val(parseInt($('.count1').val()) + 1 );
    });
    $(document).on('click','.minus1',function(){
        $('.count1').val(parseInt($('.count1').val()) - 1 );
            if ($('.count1').val() == -1) {
                $('.count1').val(0);
            }
        });
 });

 $(document).ready(function(){
    $('.count2').prop('disabled', true);
       $(document).on('click','.plus2',function(){
        $('.count2').val(parseInt($('.count2').val()) + 1 );
    });
    $(document).on('click','.minus2',function(){
        $('.count2').val(parseInt($('.count2').val()) - 1 );
            if ($('.count2').val() == -1) {
                $('.count2').val(0);
            }
        });
 });