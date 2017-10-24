'use strict';


window.onload = function () {
    buttonsMenu();
    navMenu();
};







///////////////////////////////////
///////////        common functions
///////////////////////////////////
function noUrl(data) {
    for(var i = 0; i < data.length; i++){
        data[i].onclick = function(event) {
    if (event.target.nodeName !== 'A') return;

    var href = event.target.getAttribute('href');
    return false;
}}}

function removeClass(data) {
    for(var i = 0; i < data.length; i++){
        data[i].classList.remove('active')
    }
}




///////////////////////////////////
///////////        tabs
///////////////////////////////////


tabs();
function tabs() {
    var tabsButton  = document.getElementsByClassName('tabs_button'),
        tabsContent = document.getElementsByClassName('tabs_content'),
        tabs        = document.querySelector('.tabs');

    addClass();
    takActiveIndex();
    noUrl(tabsButton);

    function addClass() {
        for(var i = 0; i < tabsButton.length; i++)
        tabsButton[i].addEventListener('click', function(){
            if (!this.classList.contains('active')){
                removeClass(tabsButton);
                this.classList.add('active')
            }
        })
    }


    function takActiveIndex() {
        tabs.addEventListener('click', function (event) {
            var target = event.target;

            if(target.className === 'tabs_button active'){

                for(var i = 0; i < tabsButton.length; i++){
                    if(target === tabsButton[i]){
                        showContent(i);
                        break;
                    }
                }
            }
        })
    }


    function showContent(i) {
        removeClass(tabsContent)
        tabsContent[i].classList.add('active')
    }
}

///////////////////////////////////
////                   navigation
///////////////////////////////////

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

///////////////////////////////////
////  tool buttons and buttons menu
///////////////////////////////////

function buttonsMenu() {

    var buttons = document.getElementsByClassName('button'),
        buttonMenuItem  = document.getElementsByClassName("button-menu_item");

    filterOnChilde(buttonMenuItem);
    noUrl(buttons);
    toggelClass();


    function toggelClass() {
        for(var i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', function () {
                if (!this.classList.contains('active')){
                    removeClass(buttons);
                    this.classList.add('active')
                } else removeClass(buttons)
            })
        }
    }


    (function() {
        document.addEventListener('click', function () {
            var activeButton = document.querySelector('.button.active');
            if(event.target!==activeButton){
                removeClass(buttons)
            }
        })
    })()
}

function filterOnChilde(data) {
    for (var i = 0;i<data.length;i++) {
        if (data[i].childElementCount > 1) {
            data[i].classList.add('share');
        }
    }
}

