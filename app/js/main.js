'use strict';





filterOnChilde(document.getElementsByClassName("button-menu_item"));

addedClass(document.getElementsByClassName("button_item"));

function filterOnChilde(data) {
    for (var i = 0;i<data.length;i++) {
        if (data[i].childElementCount > 1) {
            data[i].classList.add('share');
        }
    }
}

function addedClass(data) {
    for (var i = 0;i<data.length;i++) {
        data[i].onclick = function () {
            var value = 'active';
            if (this.classList.contains(value)) {
                this.classList.remove(value);
                 } else {
                for (var i = 0;i<data.length;i++) {
                    data[i].classList.remove(value)
                }
                this.classList.add(value)
            }
        }
    }}


