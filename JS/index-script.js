 //NAV BAR 
 //DECLARATION
 const menuBtn =document.querySelector(".menu-bar span");
 const searchBtn =document.querySelector(".search-icon");
 const cancelBtn =document.querySelector(".cancel");
 const bar =document.querySelector(".nav-bar");
 const form =document.querySelector("form");

 //MENUE ICON WORK
 menuBtn.onclick = ()=>{
     bar.classList.add("active");
     menuBtn.classList.add("hide");
     searchBtn.classList.add("hide");
     cancelBtn.classList.add("show");
 }

 //CANCEL ICON WORK
 cancelBtn.onclick = ()=>{
     bar.classList.remove("active");
     menuBtn.classList.remove("hide");
     searchBtn.classList.remove("hide");
     cancelBtn.classList.remove("show");
     form.classList.remove("active");
     cancelBtn.style.color = "#ff3d00";
 }

 //SEARCH ICON WORK
 searchBtn.onclick = ()=>{
     form.classList.add("active");
     searchBtn.classList.add("hide");
     cancelBtn.classList.add("show");
 }

//SLIDER
 //AUTO SLIDESHOW
 var indexValue = 0;
 function slideShow() {
     setTimeout(slideShow, 2500);
     var x;
     const IMG = document.querySelectorAll("#IMG");
     for(x=0; x < IMG.length; x++){
        IMG[x].style.display = "none";
     }
     indexValue++;
     if(indexValue > IMG.length){indexValue = 1}
     IMG[indexValue -1].style.display = "block";
 }
 slideShow();

 //MANUAL

 var indexValue = 1;
 showImg(indexValue);
 function btm_slide(e){showImg(indexValue = e);}
 function slide_slide(e){showImg(indexValue += e);}

 function showImg(e){
     var i;
     const IMG = document.querySelectorAll('#IMG');
     const sliders = document.querySelectorAll('.btm-sliders span');
     if (e > IMG.length){indexValue = 1}
     if (e < 1){indexValue = IMG.length}

     for (i=0; i < IMG.length; i++){
        IMG[i].style.display = "none";
     }
     for (i=0; i < sliders.length; i++){
         sliders[i].style.background = "rgba(255, 255, 255, 0.1)";
     }
     IMG[indexValue-1].style.display = "block";
     sliders[indexValue-1].style.background = "white";
 }
