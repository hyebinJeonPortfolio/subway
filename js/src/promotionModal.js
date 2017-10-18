/*modal_01.js*/
(function($){
var ModalOff = function(display){
$('.modal_box, .modal_bg').addClass(display);
};//ModalView

var ModalOn = function(display){
  $('.modal_box, .modal_bg').removeClass(display);
};//ModalOff


ModalOff('modal_dp');

//ModalOn('modal_dp');

  $('.modal_bg').on('click',function(){
    ModalOff('modal_dp');
  });//on

//
var galleryBox = $('.gallery_list');
var gallery_list = galleryBox.children('li');

gallery_list.on('click', function(e){
  e.preventDefault();
  ModalOn('modal_dp')
});//on

//이미지 ++++++++++++++++++++++++++


var url = '../img/';

var image = [
  {
    'small' : {'img':'p03.jpg' , 'alt':'1번째 사진'},
    'big' : {'img': 'p03_big.jpg' , 'alt':'1번째 큰 사진'}
  },
  {  
    'small' : {'img':'p02.jpg' , 'alt':'2번째 사진'},
    'big' : {'img': 'p02_big.jpg' , 'alt':'2번째 큰 사진'}
  },
  {
    'small' : {'img':'p01.jpg' , 'alt':'3번째 사진'},
    'big' : {'img': 'p01_big.jpg' , 'alt':'3번째 큰 사진'}
  },
  {  
    'small' : {'img':'p04.jpg' , 'alt':'4번째 사진'},
    'big' : {'img': 'p04_big.jpg' , 'alt':'4번째 큰 사진'}
  },
  {
    'small' : {'img':'p05.jpg' , 'alt':'5번째 사진'},
    'big' : {'img': 'p05_big.jpg' , 'alt':'5번째 큰 사진'}
  }
];

var i = 0;
var imageLength = image.length;
var imageSrc,imageAlt;
var button = gallery_list.children('button');

for(; i<imageLength; i++){

imageSrc = url+image[i].small.img;
imageAlt = image[i].small.alt;

button.eq(i).find('img')
      .attr({'src':imageSrc, 'alt':imageAlt});
};//for

var BigSrc, BigAlt;

var modal_box = $('.modal_box');
BigSrc = url+image[0].big.img;
BigAlt = image[0].big.alt;
modal_box.find('img').attr({'src':BigSrc, 'alt':BigAlt});

gallery_list.on('click',function(e){
  e.preventDefault();

  var _this = $(this);
  var _this_index = _this.index();

  BigSrc = url + image[_this_index].big.img;
  BigAlt = image[_this_index].big.alt;
  modal_box.find('img').attr({'src':BigSrc,'alt':BigAlt});
  modal_box.css({'backgroundPosition':'center',
                  'backgroundSize':'cover'});
});//on

})(this.jQuery);