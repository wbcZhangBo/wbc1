var arr = [
    {
        name: '张三',
        age: 23,
        mobile: 18542586235,
        email: '12546584@.qq.com',
        gender: '男'
    },
    {
        name: '李四',
        age: 25,
        mobile: 15862535648,
        email: '14526658@.qq.com',
        gender: '女'
    },
    {
        name: '王五',
        age: 26,
        mobile: 18542586235,
        email: '102448694@.qq.com',
        gender: '男'
    },
    {
        name: '赵六',
        age: 28,
        mobile: 13156895895,
        email: '12458445@.qq.com',
        gender: '女'
    },
    {
        name: '张三',
        age: 20,
        mobile: 18632613438,
        email: '128546546@.qq.com',
        gender: '男'
    },
    {
        name: '张三',
        age: 26,
        mobile: 13256846885,
        email: '12525642@.qq.com',
        gender: '女'
    }
]

function tberd() {
    var tb = document.getElementById('tb'),
        i, len = arr.length, arr1= [];

        for (i=0; i<len; i++) {
            arr1.push(
                '<tr>',
                    '<td>'+arr[i].name+'</td>',
                    '<td>'+arr[i].age+'</td>',
                    '<td>'+arr[i].mobile+'</td>',
                    '<td>'+arr[i].email+'</td>',
                    '<td>'+arr[i].gender+'</td>',
                '</tr>'
            )
        }
    tb.innerHTML = arr1.join('');
}

tberd();