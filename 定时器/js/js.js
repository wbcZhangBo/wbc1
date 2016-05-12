setInterval(function() {
    var MyClock = document.getElementById('MyClock')
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (seconds < 10) {
       seconds = '0'+seconds
    }

    var time = hour + ':' + minutes + ':' + seconds;
    MyClock.innerHTML = time;
}, 1000);





/*var members = [
    '张勃',
    '杨天骄',
    '周振阳',
    '魏先强',
    '阚鑫磊',
    '周振阳',
    '徐月亭',
    '时刘韩',
    '张金阳',
    '郇昌',
    '李晶'
];

var myDm = document.getElementById('myDm');

var start = document.getElementById('start');
var stop = document.getElementById('stop');

var timer;

start.onclick = function() {
    // 第一种方法
    // start.disabled = 'disabled'; 
    
    if (timer) {
        return;
    } 
    
    timer = setInterval(function() {
        var r = parseInt(Math.random() * 11);
        myDm.innerHTML = (members[r]);
    }, 50);
}

stop.onclick = function() {
    // 第一种方法
    // start.disabled = '';
    
    clearInterval(timer);
    timer = undefined;
}*/


/*var price = 0;

for (var i = 0; i <= 100; i += 2) {
    price += i;
}

console.log(price);*/



// 另一种方法

/*var price = 0;

for (var i = 0; i <= 100; i++) {

    if (i % 2 == 0){
        price += i;
    }  
}

console.log(price);*/

/*var price = 0;

for (var i = 0; i <= 100; i++) {

     if  (i % 2 == 1){
         continue
     }
    price += i;

}
console.log(price);*/

/*var a='#';
var b='&';
var c=''*/


// for (var i = 1; i <= 8; i++) {
//     for (var v = 0; v < 10; v++){
        
//         if (i==1 || i==8){
//             document.write('#')
//         } else if(i==2 || i==5){
//             document.write('&')
//         } else if(i==3 || i==6){
//             document.write('@')
//         } else if(i==4 || i==7){
//             document.write('%')
//         } 
//     }
//     document.write('<br>')
// };

