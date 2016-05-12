// function baidu() {
//     var mydiv = document.getElementById('mydiv'),
//         idt = document.getElementById('jdt'),
//         timer;

//     mydiv.onclick = function() {
//         var add = 0;
//         timer = setInterval(function() {
//             console.log(add)
//             add++;
//             idt.style.width = add * 10 + '%';
//             if (add >= 10){
//                 clearInterval(timer)
//             }
            
//         }, 1000)
//     }
    
// }

// baidu();

function bdmenu() {
    var $mydiv = $('#mydiv');
    $mydiv.on('click', function() {
        $mydiv.find('div').animate({marginLeft: 0}, 15000)
    }) 
}

bdmenu();