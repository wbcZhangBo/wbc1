var didian = ['故宫','长城','十三陵','十渡','圆明园','颐和园'];


var mydiv = document.getElementById('mydiv');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var myinput = document.getElementById('myinput');
var xz = document.getElementById('xz');

var timer;

start.onclick = function() {

    if (timer) {
        return;
    }
    timer = setInterval(function() {
        sup = Math.floor(Math.random()*didian.length);
        mydiv.innerHTML = didian[sup];
}, 50);
};

stop.onclick = function() {
    clearInterval(timer);
    timer = undefined;
};

xz.onclick = function() {
    arr = myinput.value;
    arr = arr.split('|');
    for (i=0; i<didian.length; i++) {
            ree = didian[i]
            if (arr == ree) {
            return;
        };
    };
    didian = didian.concat(arr);
    console.log(didian);
};
console.log(didian);




