function oninput() {
    var thipt = document.getElementById('thipt'),
        ipts = document.getElementsByName('ipts'),
        len = ipts.length,
        j;
        // thipt.checked = 'checked';
    thipt.onclick = function() {
        var i, a = '', b = '';
            if (this.checked) {
                a = 'checked';
            } else {
                a = '';
            }
            this.checked ? b = 'yellow' : b = '#fff';

            for (i=0; i<len; i++) {
                ipts[i].checked = a;
                ipts[i].parentNode.parentNode.style.backgroundColor = b;
            }
            
        }

    for (j=0; j<len; j++) {
        ipts[j].onclick = function() {
            if (this.checked) {
                c = 'yellow';
            } else {
                c = '#fff';
            }
            this.parentNode.parentNode.style.backgroundColor = c;
            if(isChecked()) {
                thipt.checked = 'checked';
            } else {
                thipt.checked = '';
            }
        }

    }

    function isChecked() {
        var k;
        for(k=0; k<len; k++) {
            if (!ipts[k].checked) {
                return false;
            }
        };
        return true;   
    }
    console.log(isChecked())
}
oninput();