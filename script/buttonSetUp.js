function setUpButton(){
    let buttonList = document.getElementsByClassName("button");
    for (let i = 0; i < buttonList.length; i++){
        let back = document.createElement("DIV");
        back.classList.add("back");
        buttonList[i].appendChild(back);
        buttonList[i].onmouseover = function(){
            back.style.width="100%";
        };
        buttonList[i].onmouseout = function(){
            back.style.width="0%";
        };
    }
}