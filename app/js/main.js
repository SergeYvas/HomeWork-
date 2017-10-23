'use strict';





filterOnChilde(document.getElementsByClassName("button-menu_item"));

buttonsMenu();
noUrl(document.getElementsByClassName('button'));
noUrl(document.getElementsByClassName('tabs_button'));



function filterOnChilde(data) {
    for (var i = 0;i<data.length;i++) {
        if (data[i].childElementCount > 1) {
            data[i].classList.add('share');
        }
    }
}



function noUrl(data) {
    for(var i = 0; i < data.length; i++){
        data[i].onclick = function(event) {
    if (event.target.nodeName !== 'A') return;

    var href = event.target.getAttribute('href');
    return false;
}}}









function buttonsMenu() {


    var buttons = document.getElementsByClassName('button');
    console.log(buttons);
    addCkass();
    function addCkass() {
        for(var i = 0; i <buttons.length; i++){
            buttons[i].addEventListener('click',function () {
                if (!this.classList.contains('active')){
                    removeClass();
                    this.classList.add('active')
                } else removeClass()
            })
        }
    }

    function removeClass() {
        for (var i = 0; i<buttons.length;i++){
            buttons[i].classList.remove('active')
        }
    }
    resetAllCLases();
    function resetAllCLases() {

        document.addEventListener('click', function () {
            var activeButton = document.querySelector('.button.active');
            if(event.target!==activeButton){
                console.log('ага');
                removeClass()
            }
        })
    }
}



