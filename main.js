var imgList = Array.from (document.querySelectorAll(".item img")) ;
var lightBox = document.getElementById("lightBox")
var lightBoxItem = document.getElementById("lightBoxItem")
var next = document.getElementById("nextBtn")
var prev = document.getElementById("prevBtn")
var closee = document.getElementById("close")

var imgContainer;
//console.log(imgList)


for(i=0; i<imgList.length; i++){
    imgList[i].addEventListener("click", function(e){
        lightBox.style.display = "flex";
        var imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
       imgContainer = imgList.indexOf(e.target);
        //console.log(imgContainer)
       })
      
}

// function nextSlide (){
//     imgContainer = imgContainer+1;
//     if(imgContainer == imgList.length){
//         imgContainer = 0;
//     }
//     console.log(imgContainer)
//    var imgSrc = imgList[imgContainer].src;
//    lightBoxItem.style.backgroundImage = `url(${imgSrc})`

// }
// function prevSlide (){
//     imgContainer = imgContainer-1;
//     if(imgContainer < 0){
//         imgContainer = imgList.length -1;
//     }
//     console.log(imgContainer)
//    var imgSrc = imgList[imgContainer].src;
 //  lightBoxItem.style.backgroundImage = `url(${imgSrc})`

//}
function closeWindow(){
    lightBox.style.display = "none"
}


function slide(i){
    imgContainer = imgContainer+ i;
    if(imgContainer == imgList.length){
        imgContainer = 0;
    }
    if(imgContainer < 0){
        imgContainer = imgList.length -1;
    }
    
   var imgSrc = imgList[imgContainer].src;
   lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}
next.addEventListener('click' , function(){slide(1)})
prev.addEventListener("click" , function(){slide(-1)})

closee.addEventListener("click" , function(){
    closeWindow()
})
document.addEventListener("keydown", function(e){
    if(e.code == "ArrowRight"){
        slide(1)
    }
    else if(e.code == "ArrowLeft"){
        slide(-1)
    }
    else if(e.code == "Escape"){
        closeWindow()
    }
})
var icons = document.getElementById("icona")
