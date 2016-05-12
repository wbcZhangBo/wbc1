function cls(clas) {
    return document.getElementsByTagName(clas);
}

function clsname(cne) {
    var i, len, eles, arr = [];
    // if(document.getElementsByClassName) {
    //     return document.getElementsByClassName(cne);
    // }

    eles = cls('*');
    len = eles.length;
    for(i=0; i<len; i++) {
        if(eles[i].className.indexOf(cne) > -1 ) {
            arr.push(eles[i])
        }
    }
    return arr;
}

function divs() {
    var divss = clsname('mydiv5'),
        len = divss && divss.length || 0,
        b;
    for (b=0; b<len; b++) {
        divss[b].style.backgroundColor = 'red';
    }
}

divs();