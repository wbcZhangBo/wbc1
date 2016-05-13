var addopt = function() {
    var sel = document.getElementById('sel'),
        newopt = document.getElementById('newopt'),
        arr = ['故宫','长城','十三陵','十渡','圆明园','颐和园','十渡','圆明园','颐和园'];
        newopt.onclick = function() {
            var i, 
                len = arr.length,
                arr1 = ['<option>请选择</option>'];
            for (i=0; i<len; i++) {
                arr1.push('<option>'+arr[i]+'</option>')
            };

            sel.innerHTML = arr1;
            console.log(arr1)
        }
}

addopt();