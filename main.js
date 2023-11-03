var minus = document.getElementsByClassName("minus");
var plus = document.getElementsByClassName("plus");
var valueItem = document.getElementsByClassName("zero");

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
        if (valueItem[i].innerText > 0) {
            valueItem[i].innerText--;
        }
    });

    plus[i].addEventListener("click", function () {
        valueItem[i].innerText++;
    });
}
