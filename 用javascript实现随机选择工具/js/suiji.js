var arr = ['故宫','长城','十三陵','十渡','圆明园','颐和园','十渡','圆明园','颐和园'];
    

var mydiv = document.getElementById('mydiv'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    myinput = document.getElementById('myinput'),
    xz = document.getElementById('xz'),
    timer;

function rdm() {
   
    start.onclick = function() {
        var sum,
            len = arr.length;
        if (timer) {
            return;
        }
        console.log(timer)
        timer = setInterval(function() {
            sum = Math.floor(Math.random() * len);
            mydiv.innerHTML = arr[sum];
        }, 100)
    }

    stop.onclick = function() {
        clearInterval(timer);
        timer = undefined;
    }

    xz.onclick = function() {
        var val = myinput.value, 
            val = val.split('|'),
            i;
            arr = arr.concat(val);
            
            function arrone() {
                var i, len = arr.length, arra = [];
                for (i=0; i<len; i++) {
                    if(!arrtwo(arra,arr[i])) {
                        arra.push(arr[i])
                    }
                }
                return arra;
            }

            function arrtwo(nar,par) {
                var j, len = nar.length;
                for (j=0; j<len; j++) {
                    if(nar[j] == par) {
                        return true;
                    }
                }
                return false;
            }
            console.log(arrone())
    };
    
}
rdm();




