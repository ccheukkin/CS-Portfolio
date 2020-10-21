var slidePair = [
    ["pivotDetect","pivotSlide"]
]
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let winHeight = window.innerHeight;
    if (currentScrollPos < 700) {
        document.getElementById("topBar").style.backgroundColor = "rgba(0,0,0,"+(currentScrollPos/700).toString()+")";
    }
    else{
        document.getElementById("topBar").style.backgroundColor = "rgba(0,0,0,1)";
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

    prevScrollPos = window.pageYOffset;
}

function titileSlide(){
    document.getElementById("mainTitle").style.top = "0";
    document.getElementById("mainTitle").style.opacity = "1";
}