'use strict';

window.onload = () => {
    buttonsMenu();
    navMenu();
    tabs();
};


///////////////////////////////////
///////////        common functions
///////////////////////////////////


function noUrl(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].onclick = (event) => {
            if (event.target.nodeName !== 'a') return;

            let href = event.target.getAttribute('href');
            return false;
        };
    }
}


function removeClass(data) {
    for (let i = 0; i < data.length; i++)
        data[i].classList.remove('active');
}

///////////////////////////////////
///////////        tabs
///////////////////////////////////



function tabs() {
    const tabsButton = document.getElementsByClassName('tabs_button'),
          tabsContent = document.getElementsByClassName('tabs_content'),
          tabs = document.querySelector('.tabs');

    addClass();
    takActiveIndex();
    noUrl(tabsButton);

    function addClass() {
        for (let i = 0; i < tabsButton.length; i++) {
            tabsButton[i].addEventListener('click', (event) => {
                if (!event.target.classList.contains('active')) {
                    removeClass(tabsButton);
                    event.target.classList.add('active');
                }
            });
        }
    }

    function takActiveIndex() {
        tabs.addEventListener('click', (event) => {
            let target = event.target;

            if(target.className === 'tabs_button active') {
                for (let i = 0; i < tabsButton.length; i++) {
                    if (target === tabsButton[i]) {
                        showContent(i);
                        break;
                    }
                }
            }
        });
    }

    function showContent(i) {
        removeClass(tabsContent);
        tabsContent[i].classList.add('active');
    }
}

///////////////////////////////////
////                   navigation
///////////////////////////////////

function navMenu() {
    let navItems = document.querySelectorAll('.navigation_item');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', (event) => {
            if (!event.target.classList.contains('active')) {
                removeClass(navItems);
                event.target.parentNode.classList.add('active');
            } else {
                event.target.parentNode.classList.remove("active");
            }
        })
    }
}

///////////////////////////////////
////  tool buttons and buttons menu
///////////////////////////////////


function buttonsMenu() {

    let buttons = document.getElementsByClassName('button'),
        buttonMenuItem = document.getElementsByClassName("button-menu_item");


    filterOnChilde(buttonMenuItem);
    noUrl(buttons);
    toggelClass();


    function toggelClass() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', (event) => {
                if (!event.target.classList.contains('active')) {
                    removeClass(buttons);
                    event.target.classList.add('active');
                } else removeClass(buttons);
            });
        }
    }


    (()=> {
    document.addEventListener('click', function () {
        let activeButton = document.querySelector('.button.active');

        if (event.target !== activeButton) removeClass(buttons);

    });
})();
}


function filterOnChilde(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].childElementCount > 1) data[i].classList.add('share');
    }
}
