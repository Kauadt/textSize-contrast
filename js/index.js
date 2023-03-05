var standard = 18;
var i = 0;
var header = document.querySelector('#header');
header.addEventListener('click', () => {
    var color = ['#000', '#7a061a', '#02003a', '#252522'];
    var letter = ['#fff', '#013b1a', '#ffffff', '#f0e111'];
    i++;
    if (i == color.length) {
        i = 0;
    }
    document.getElementById("background").style.backgroundColor = color[i];
    document.getElementById("text").style.color = letter[i];
});

sizeFont = (size) => {
    if (size == 18) {
        standard = size;
    } else {
        standard += size;
    }
    if (standard >= 81) {
        standard= 81;
    } else if (standard < 9) {
        padrao = 9;
    }
    document.getElementById("text").style.fontSize = standard + "px";
}



