// 写一个函数  判断返回参数的数据类型

function getBack(n) {
    var y;
    y = typeof n;
    if ( y == 'object') {
        if (n instanceof Array) {
            y = 'array'
        }
    }
    n == null ? y = 'null' : n;
    n == undefined ? y = 'undefined' : n;

    return y;
}

// var back = getBack(3)
// var back = getBack('heoll')
// var back = getBack([1])
var back = getBack({name : '李四'})
// var back = getBack(null)
// var back = getBack(undefined);

console.log(back);