let togelmenu = document.querySelector('.toggel-menu')
let breadcrumbs = document.querySelectorAll('.breadcrumbs__link')
let submenumobail = document.querySelectorAll('.menu-mobail__link')
let contentsubmenu = document.querySelectorAll('.content')
let courselink = document.querySelectorAll('.course-part-contentbox__link')
let coursediv = document.querySelectorAll('.course-part-contentbox__box')
let menumobailitem  = document.querySelectorAll('.menu-item')
let dropdownmobail  = document.querySelector('.dropdown')
let menumobailitemsub = document.querySelectorAll('.menu-item__sub')



dropdownmobail.addEventListener('click', function () {
  
  menumobailitem.forEach(function(item){
    
    item.classList.toggle('menu-item--active')
    
  })
  document.querySelectorAll('.dropdown-icon').forEach(function(item){
    
    item.classList.toggle('dropdown-icon--active')
    
  })
  
})
menumobailitemsub.forEach(function(item){
  
  item.addEventListener('click',function(){
    
    document.querySelectorAll('.menu-item__sub').forEach(function(item){
      
      item.classList.add('height-drop')
      
    })
    document.querySelectorAll('.menu-item-sub--active').forEach(function(item){
      
      item.classList.remove('menu-item-sub--active')
      
      
    })
    this.classList.add('menu-item-sub--active')
    

  })
  
})

togelmenu.addEventListener('click',function(){
  
  document.querySelector(".toggel-menu__line").classList.toggle('toggel-menu__line--active')
  document.querySelector('.nav-mobail').classList.toggle('nav-mobail--active')
  if(document.querySelector('.nav-mobail').className == 'nav-mobail'){

    document.querySelector(".menu-item--active").classList.remove('menu-item--active')
    document.querySelector(".menu-item-sub--active").classList.remove('menu-item-sub--active')
    
  }
  
})
breadcrumbs.forEach(function(item){
  
  item.addEventListener('click',function(event){
    event.preventDefault()
    
    document.querySelector('.breadcrumbs__link--active').classList.remove('breadcrumbs__link--active')
    this.classList.add('breadcrumbs__link--active')
    
    
  })

})
submenumobail.forEach(function(item){
  
  item.addEventListener('click',function(event){
    event.preventDefault()
    this.classList.toggle('menu-mobail__link--active')
    contentsubmenu.forEach(function(item){
      item.style.display = item.style.display === 'block' ? 'none' : 'block';
    })
    
  })
})
courselink.forEach(function(item){
  item.addEventListener('click',function(event){
    event.preventDefault()
    
  })
  
})
coursediv.forEach(function(item){
  
  item.addEventListener('click',function(){
    console.log('cli')
    this.classList.toggle('course-part-contentbox__box--open')
    
    
  })
  
})






// swiper
var swiper = new Swiper(".Swiper1",{
    loop: true,
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      
      768: {
        
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function enableOnlyMobile(swiper){
          // Disable the slider when the window width is less than or equal to 960
          if(768 > window.innerWidth){
            swiper.disable()
            swiper.el.classList.add('non-slider')
          }else{
            swiper.enable()
            swiper.el.classList.remove('non-slider')
          }
        },
      }
    });
    
    
    var swiper = new Swiper(".Swiper2", {
      effect: "coverflow",
      loop: true,
      // grabCursor: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      
    },
    on: {
      resize: function enableOnlyMobile(swiper){
        // Disable the slider when the window width is less than or equal to 960
        if(768 > window.innerWidth){
          swiper.disable()
          swiper.el.classList.add('non-slider')
        }else{
          swiper.enable()
          swiper.el.classList.remove('non-slider')
        }
      },
  }
});






