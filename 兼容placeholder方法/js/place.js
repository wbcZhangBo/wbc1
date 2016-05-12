function fix() {
    var 
    // input = document.createElement('input'),
        ipt = document.getElementsByTagName('input'),
        len = ipt.length,
        i,
        phtxt,
        phspan;

        // if ('placeholder' in input) {
        //     return
        // }

        for (i=0; i<len; i++) {
            phtxt = ipt[i].getAttribute('placeholder');
            phspan = ipt[i].parentNode.getElementsByTagName('span')[0];
            phspan.innerHTML = phtxt;
            phspan.onclick = function() {
                this.parentNode.getElementsByTagName('input')[0].focus();
            }

            ipt[i].onkeyup = function() {
                var status = 'block';
                if (this.value.length > 0) {
                    status = 'none';
                }
                this.parentNode.getElementsByTagName('span')[0].style.display = status;
            }


        }

}
fix();