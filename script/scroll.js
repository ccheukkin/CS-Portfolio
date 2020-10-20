var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let bottomPos = currentScrollPos + window.screen.height;
    if (currentScrollPos < 700) {
        console.log("rgba(0,0,0,"+(currentScrollPos/700).toString()+")");
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

    prevScrollPos = window.pageYOffset;
}

function titileSlide(){
    document.getElementById("mainTitle").style.top = "0";
    document.getElementById("mainTitle").style.opacity = "1";
}