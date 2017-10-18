(function($){

  var content = $("#contentBox");
  var conDt = content.find('dt');
  var conDd = content.find('dd');
  conDd.hide();

  var rotate = 0;
  conDt.on('click',function(e){
    e.preventDefault();
    var _$this = $(this);
    rotate += 180;

    _$this.next('dd').siblings('dd').stop().slideUp();
    _$this.next('dd').stop().slideToggle();

var hasView = _$this.children('.f').children('i').hasClass('view');

if( !hasView){ 
  _$this.children('.f').children('i').addClass('view'); 
  _$this.siblings('dt').children('.f').children('i').removeClass('view');
} else { 
  _$this.children('.f').children('i').removeClass('view'); 
  _$this.siblings('dt').children('.f').children('i').removeClass('view');
};

  });//on
})(this.jQuery);