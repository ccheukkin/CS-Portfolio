var slidePair = [
    ["pivotDetect","pivotSlide"],
    ["neuroeDetect","neuroeSlide"],
    ["aoaocDetect","aoaocSlide"],
    ["tetrisDetect","tetrisSlide"],
    ["selftrisDetect","selftrisSlide"]
]
var prevScrollPos = window.pageYOffset;
const parallax = 0.4;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let winHeight = window.innerHeight;
    if (currentScrollPos < 700) {
        let percent = currentScrollPos/700;
        document.getElementById("topBar").style.backgroundColor = "rgba(0,0,0,"+percent.toString()+")";
        let rgbPercent = percent * 255;
        document.getElementById("logo").style.color = `rgb(${rgbPercent},${rgbPercent},${rgbPercent})`;
    }
    else{
        document.getElementById("topBar").style.backgroundColor = "rgba(0,0,0,1)";
        document.getElementById("logo").style.color = "rgb(255,255,255)";
    }

    let languageList = document.getElementsByClassName("lang");
    if (document.getElementById("langDetect").getBoundingClientRect().top > winHeight){
        for (let i = 0; i < languageList.length; i++){
            languageList[i].style.top = "100px";
            languageList[i].style.opacity = "0";
        }
    }else{
        for (let i = 0; i < languageList.length; i++){
            languageList[i].style.top = "0px";
            languageList[i].style.opacity = "1";
        }
    }

    for (let i = 0; i < slidePair.length; i++){
        let detect = document.getElementById(slidePair[i][0]);
        let slide = document.getElementById(slidePair[i][1]);
        if (detect.getBoundingClientRect().top > winHeight){
            slide.style.top = "100px";
            slide.style.opacity = "0";
        }else{
            slide.style.top = "0px";
            slide.style.opacity = "1";
        }
    }

    document.getElementById("banner").style.backgroundPositionY = -1 * currentScrollPos * parallax + "px";

    prevScrollPos = window.pageYOffset;
}

function titleSlide(){
    document.getElementById("mainTitle").style.top = "0";
    document.getElementById("mainTitle").style.opacity = "1";
}