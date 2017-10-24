'use strict';





filterOnChilde(document.getElementsByClassName("button-menu_item"));

buttonsMenu();
noUrl(document.getElementsByClassName('button'));
noUrl(document.getElementsByClassName('tabs_button'));
navMenu();


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



function navMenu() {
    var navItems = document.querySelectorAll('.navigation_item');
    for(var i = 0; i < navItems.length; i++){
        navItems[i].addEventListener('click', function () {
            if (!this.classList.contains('active')){
                for (var i = 0; i < navItems.length;i++){
                    navItems[i].classList.remove('active');
                }
                this.classList.add('active');
            } else {
                this.classList.toggle("active");
            }
        })
    }
}


function buttonsMenu() {

    var buttons = document.getElementsByClassName('button');

    toggelClass();
    function toggelClass() {
        for(var i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', function () {
                if (!this.classList.contains('active')){
                    removeClass();
                    this.classList.add('active')
                } else removeClass()
            })
        }
    }


    function removeClass() {
        for (var i = 0; i < buttons.length;i++){
            buttons[i].classList.remove('active')
        }
    }


    (function() {
        document.addEventListener('click', function () {
            var activeButton = document.querySelector('.button.active');
            if(event.target!==activeButton){
                removeClass()
            }
        })
    })()
}



