import { videos } from '../dataVideos-object/data.js';

$(document).ready(function () {
    seriesslider()
    CheckLogin()    
    secendHeader()
    SearchSideCreating()
    SearchAndAlaramHover()
    CreatingSectionCaallback()

    





    
});




function CreatingSectionCaallback(param) { 
 
    // for horror
    let dataHorror = videos.genre.horror
        
    for (const key in dataHorror) {
        const element = dataHorror[key];
        createItemForSlider(element.VerticalImg,element.namee,element.rate,"Horror")            
        
      
    }

// for horror
let datFun = videos.genre.fun
        
for (const key in datFun) {
    const element = datFun[key];
    createItemForSlider(element.VerticalImg,element.namee,element.rate,"Fun")            
    
  
}


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

    function seriesslider() { 
   
        $("#slide").owlCarousel({
            items: 1,
            dots:false,
            nav:true,
            loop:true,
            autoplay:false,
            smartSpeed:1900,
            autoplayHoverPause:true,
            navText: ['<i class="right"><</i>', '<i class="left">></i>'],
                
          });
        
        
            
    }

        function slideritem() {
            videos.forEach(video => {
                const img = $('<img>').attr('src', video.src);
                $('#slide').append(img);
            });
    }
   
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

   function createItemForSlider(img,name,rate,section) { 
    // container
    let conItem = document.createElement("article")
    conItem.className = "HorrorItem";
    // img 
    let Sliderimg = document.createElement("img")
    Sliderimg.src = img

    // con > info parent
    let infoParent = document.createElement("div")
    infoParent.className = "infoParent";
     // con > info parent > section
    let HorrorItemInfoSec = document.createElement("section")
    HorrorItemInfoSec.className = "HorrorItemInfo";

    // con > info parent > section > texts
    let Paragraph = document.createElement("p")
    Paragraph.innerText = name

    let ratee = document.createElement("span")
    ratee.innerText = rate + "/10 " ;

    let star = document.createElement("i")
    star.classList = "fa fa-star"

    let btn = document.createElement("button")
    btn.innerText = "Watch Now"
    btn.classList = "HorrorItemInfoBtn"
    
    //  geting container to add items

    let slider = document.getElementsByClassName(section+"SliderMovies").item(0)
    
    slider.appendChild(conItem)
    conItem.appendChild(Sliderimg)
    conItem.appendChild(btn)
    conItem.appendChild(infoParent)
    infoParent.appendChild(HorrorItemInfoSec)
    HorrorItemInfoSec.appendChild(Paragraph)
    HorrorItemInfoSec.appendChild(ratee)
    ratee.appendChild(star)



   

    }