var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let bottomPos = currentScrollPos + window.screen.height;
    if (currentScrollPos < 700) {
        document.getElementById("topBar").style.backgroundColor = "rgba(0,0,0,"+(currentScrollPos/700).toString()+")";
    }
    else{
        document.getElementById("topBar").style.backgroundColor = "rgba(0,0,0,1)";
    }

    let languageList = document.getElementsByClassName("lang");
    if (bottomPos > 1300){
        for (let i = 0; i < languageList.length; i++){
            languageList[i].style.top = "0px";
            languageList[i].style.opacity = "1";
        }
    }else{
        for (let i = 0; i < languageList.length; i++){
            languageList[i].style.top = "100px";
            languageList[i].style.opacity = "0";
        }
    }

    if (bottomPos < 1850) {
        document.getElementById("pivotText").style.top = "100px";
        document.getElementById("pivotText").style.opacity = "0";
    }
    else{
        document.getElementById("pivotText").style.top = "0";
        document.getElementById("pivotText").style.opacity = "1";
    }

    prevScrollPos = window.pageYOffset;
}

function titileSlide(){
    document.getElementById("mainTitle").style.top = "0";
    document.getElementById("mainTitle").style.opacity = "1";
}