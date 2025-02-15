$(function () {

// creating first interduce movies slider 
interduceSldier()

secendSldier()
// checking login
    CheckLogin()

    // header model 2
    
    secendHeader()
    
  filter()
    
  // toggle like
  let likeState = false
  $(".item2-info-div > section > div > i:nth-child(1)").click(function (e) { 

    if (likeState == false) {
      $(this).addClass(" fa-heart")
    $(this).removeClass(" fa-heart-o")
    likeState =true
    }

    else{
      $(this).addClass(" fa-heart-o")
    $(this).removeClass(" fa-heart")
    likeState = false
    }
   

    
  });

});



// interduce Sldier
function interduceSldier() { 
   
$(".slider").owlCarousel({
    items: 1,
    dots:true,
    nav:false,
    loop:true,
    autoplay:true,
    smartSpeed:1900,
    autoplayHoverPause:true
    
  });


    
 }

 // secend Sldier
function secendSldier() { 
   
  $(".slider2 ").owlCarousel({
      items: 5,
      dots:false,
      nav:true,
      loop:true,
      autoplay:true,
      smartSpeed:1900,
      autoplayHoverPause:true,
      
      
    });
  
  
      
   }

 function CheckLogin() { 
  let check = $(".profile-btn > a > img").attr("src")
  let gender = true;
  if (check == "#" & gender == true ) {
    $(".profile-btn > a > img").attr("src","../ui web video/desktop/All imgs/user not found img/boy.jpg")
    
  }
  else if (check == "#" & gender == false ) {
    $(".profile-btn > a > img").attr("src","../ui web video/desktop/All imgs/user not found img/girl.jpg")
    
  }



  }

function secendHeader(param) { 
  
  $(window).scroll(function () {

    if ($(window).scrollTop() > 100) {   

      
      $(".Myheader").addClass("Myheader2")
      $(".Myheader").removeClass("Myheader")
      $(".link-item-parent").addClass("link-item-parent2")
      $(".link-item-parent").removeClass("link-item-parent")
      $(".link-item").addClass("link-item2")
      $(".link-item").removeClass("link-item")
      $(".parent-logo img").attr('src', '../ui web video/desktop/All imgs/logo/logo2.png');
      

    } else {

      
      $(".Myheader2").addClass("Myheader")
      $(".Myheader2").removeClass("Myheader2")
      $(".link-item-parent2").addClass("link-item-parent")
      $(".link-item-parent2").removeClass("link-item-parent2")
      $(".link-item2").addClass("link-item")
      $(".link-item2").removeClass("link-item2")
      
      $(".parent-logo img").attr('src', '../ui web video/desktop/All imgs/logo/logo.png');
      


    }

  });


 }


function filter(param) { 

  // secend slider btns
  $(".btn-parent0").on("click"," .btns0",function (param) {


    $(this).toggleClass("btnsFactive0")




   })

// secend slider btns finish


  $(".btn-parent").on("click"," .btns",function (param) { 

    $(".btn-parent>button").removeClass("btnsFactive")
    $(".btn-parent>button").addClass("btns")

    $(this).toggleClass("btnsFactive")

    

    let filterDataValue = $(this).attr("data-filter")
    $(".filter-items-container").isotope({filter:filterDataValue})

   })


 }
