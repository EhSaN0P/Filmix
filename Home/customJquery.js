$(function () {
  $(".hoverListShow").slideUp()


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
  // like toggle finished
  SearchAndAlaramHover()

// search side creating 
SearchSideCreating()


// list show


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
      $(".profile-btn > div>img").css("filter","invert(0%)")

    } else {

      
      $(".Myheader2").addClass("Myheader")
      $(".Myheader2").removeClass("Myheader2")
      $(".link-item-parent2").addClass("link-item-parent")
      $(".link-item-parent2").removeClass("link-item-parent2")
      $(".link-item2").addClass("link-item")
      $(".link-item2").removeClass("link-item2")
      $(".profile-btn > div>img").css("filter","invert(100%)")
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



 function SearchAndAlaramHover(param) {  

  $(".searchHeader").mouseenter(function () { 
    $(this).attr("src","../main-css/icons8-search.gif")
    
  });

  $(".searchHeader").mouseleave(function () { 
    $(this).attr("src","../main-css/icons8-search-50.png")
    
  });


  $(".alaramNew").mouseenter(function () { 
    $(this).attr("src","../main-css/icons8-alarm.gif")
    
  });

  $(".alaramNew").mouseleave(function () { 
    $(this).attr("src","../main-css/icons8-alarm-50.png")
    
  });


 }


//  creating search part 

function SearchSideCreating() { 

  // opening the search side
  $(".searchHeader").click(function (e) { 
    
    $(".searchSide").css("height","100vh")
    $(".searchSide").css("opacity","1")
    $(".searchSide").css("top","0")

    
  });

  
  // Closing the search side
  $(".closeSearchPart").click(function (e) { 
    
    $(".searchSide").css("height","0vh")
    $(".searchSide").css("opacity","0")
    $(".searchSide").css("top","-6rem")
    
  });

 }