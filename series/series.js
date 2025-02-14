import { videos } from '../dataVideos-object/data.js';

$(document).ready(function () {
    CheckLogin()    
    secendHeader()
    
});
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