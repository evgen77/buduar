$(document).ready(function(){
    $('.services-item, .btn_booksy').on('click',function(){

        $('body .booksy-widget-button').trigger('click');
    });

  
    // show popup
    $('.btn').on('click', function(){

        if($(this).hasClass('btn_consultation')){
            $('.popups').show();
            $('.popups .consultation').slideDown();
        } else if($(this).hasClass('btn_vaucher')){
            $('.popups').show();
            $('.popups .vaucher_from').addClass('active');
            $('.popups .vaucher_from').slideDown();
        } else if($(this).hasClass('btn_gaid')){
            $('.popups').show();
            $('.popups .gaid_form').slideDown();
        } else if($(this).hasClass('btn_sale')){

            $('.popups').show();
            $('.popups .sale_form').slideDown();
        }
       
        return false;
    });
    // close popups
    $('body .close_popup, body .overflow').on('click', function(){
        $('.popups').fadeOut();
        $(this).parent().parent().hide();
        $('.popups .vaucher_from').removeClass('active');
    });
    // scroll menu
    var header = $('header'),
    stickyHeight = header.offset().top;
    $('header nav a, .anchor').on('click',function(){
        event.preventDefault();
        $('header nav a').removeClass('active');
        $(this).addClass('active');

  

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - header.height() - 10
        }, 1000);  
    });

  
    $(window).scroll(function(){
        var currentScroll = $(window).scrollTop();
            
        if (currentScroll > stickyHeight) {
         header.addClass("sticky");
        } else {
         header.removeClass("sticky");
        }
    });
   $('.slider_home').swiper({
    mode: 'horizontal',
	slidesPerView: 1,
    nextButton: '.slider_home .swiper_arrow-next',
    prevButton: '.slider_home .swiper_arrow-prev',
    loop: true,
    breakpoints:{
        768:{
            paginationClickable: true,
            pagination: '.slider_home .swiper-pagination'
        }
    }
   });
   $('.slider_reviews').swiper({
    mode: 'horizontal',
	slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    nextButton: '.section-reviews .swiper_arrow-next',
    prevButton: '.section-reviews .swiper_arrow-prev',
    breakpoints: {
        // when window width is >= 320px
        1080: {
          slidesPerView: 2,
         
        },
        768: {
            slidesPerView: 1.1,
              paginationClickable: true,
            pagination: '.section-reviews .swiper-pagination'
           
          }
    }
   });
   $('.slider_result').swiper({
    mode: 'horizontal',
	slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    nextButton: '.section-result .swiper_arrow-next',
    prevButton: '.section-result .swiper_arrow-prev',
    breakpoints: {
        // when window width is >= 320px
        1080: {
          slidesPerView: 3,
         
        },
        768: {
            slidesPerView: 1.1,
             paginationClickable: true,
            pagination: '.section-result .swiper-pagination'
           
          }
    }
   });

   $('.slider_gallery').swiper({
    mode: 'horizontal',
	slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    nextButton: '.section-gallery .swiper_arrow-next',
    prevButton: '.section-gallery .swiper_arrow-prev',
    breakpoints: {
        // when window width is >= 320px
        1080: {
          slidesPerView: 3,
         
        },
        768:{
            paginationClickable: true,
            pagination: '.section-gallery .swiper-pagination'
        },
        560: {
            slidesPerView: 1.1,
             paginationClickable: true,
            pagination: '.section-gallery .swiper-pagination'
           
          }

    }
   });


//    menu
$('#burger').on('click',()=>{
    $('#menu').toggleClass('active');
});

//    faq

$('.faq_item-title').on('click',function(){
        
   
    $('.faq_item.active').removeClass('active');
  
    
    if( $(this).parent().hasClass('active') ){
        $('.faq_item').removeClass('active'); 
    } else{
        $(this).parent().addClass('active'); 
    }
  
    // if( $(this).parent().hasClass('active') ){
    //     $(this).parent().toggleClass('active'); 
    // } else{
    //     $(this).parent().toggleClass('active'); 
    // }

  
});

   $('.section_services li').on('click',function(){
        
        if( !$(this).hasClass('active') ){
            $('.section_services li').removeClass('active');
            $(this).addClass('active');

            $('.section_body .section_body-items').removeClass('active');

            $('.section_body .section_body-items[data-id='+$(this).attr('id')+']').addClass('active');
        }
   });

   
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {

window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
for (let index = 0; index < animItems.length; index++) {
const animItem = animItems[index];
const animItemHeight = animItem.offsetHeight;
const animItemOffset = offset(animItem).top;

const animStart = 4;
let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        console.log('222');
        animItem.classList.add('_active');
    } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
        animItem.classList.remove('_active');
        }
    }

}
    function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYoffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

}
    setTimeout(() =>{
        animOnScroll();
    },300);
}

initSlider();

});


function initSlider(){

    if($(window).width() <= 768 ){
        // gallery info
        var sectionGalleryInfo = document.querySelector(".info_gallery");

        if(sectionGalleryInfo){
            var swiperWrap = document.createElement("div");
            swiperWrap.classList.add('swiper-wrapper');

            swiperWrap.innerHTML = sectionGalleryInfo.innerHTML;


            sectionGalleryInfo.innerHTML = '';

            sectionGalleryInfo.appendChild(swiperWrap);
            $('.info_gallery').swiper({
                mode: 'horizontal',
                slidesPerView: 1,               
                loop: true,
                autoplay: true,
                speed: 2000,
                effect: 'fade',  
               
               });
        }
        var sectionBodyItems = document.querySelectorAll(".section_body-items");

        if (sectionBodyItems) {
            sectionBodyItems.forEach(function(sectionBodyItems) {
            // Создаем новый div элемент
            var newDiv = document.createElement("div");
            
            newDiv.classList.add('swiper-wrapper');
            // Копируем внутренний HTML из существующего элемента
            newDiv.innerHTML = sectionBodyItems.innerHTML;
            sectionBodyItems.innerHTML = '';
            // Добавляем новый div как дочерний элемент
            sectionBodyItems.appendChild(newDiv);
            })

            $('.section_body-items').swiper({
                mode: 'horizontal',
                slidesPerView: 2.1,
                spaceBetween: 10,
                loop: true,  
               
               });
          
        } 

    }
}
