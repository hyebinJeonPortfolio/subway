(function($) {

        var tab_1 = $('.tab_1');
        var tab_2 = $('.tab_2');
        
        $('.tab_1').children().show(); 
        $('.tab_2').children().children().eq(0).show();
        $('.tab_2').children().children().eq(0).siblings().hide();
       
   
        $('.tab_1').children().on('click',function(e){
          e.preventDefault();
          var i = $(this).index();
          console.log(i);

          tab_2.children().children().eq(i).show();
          tab_2.children().children().eq(i).siblings().hide();
        });
    })(this.jQuery);













    