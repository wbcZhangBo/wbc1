var arr = [1,2,3,5,5,5,2,3],
	arr1 = ['a','b','c','a','a','c','d'],
	arr2 = [1,2,3,5,5,5,2,3,'a','b','c','a','a','c','d'],
	arr3 = [1];
	
var obj = {
	userName : '淡定的猫鼬',
	name : '张勃',
	age : 26,
	gender : '男'
};


var students = [
	{
		userName : 'aaaaa',
		name : '吕布',
		age : 32,
		gender : '男'
	},
	{
		userName : 'asdf',
		name : '大乔',
		age : 22,
		gender : '女'
	},
	{
		userName : 'sdfgg',
		name : '小乔',
		age : 20,
		gender : '男'
	},
	{
		userName : 'wqwrt',
		name : '关羽',
		age : 35,
		gender : '男'
	},
	{
		userName : 'geash',
		name : '赵云',
		age : 28,
		gender : '男'
	},
];


/*-----------------------------------------------------------*/
// _.each用法    遍历

_.each(obj, function(val, key) {
//	console.log(key, val);
})

// js方法

for (var t in obj) {
//	console.log(t);
//	console.log(obj[t]);
};

/*-----------------------------------------------------------*/
// _.map用法   相当于push

var maps = _.map(arr, function(val, key) {
	return '<button>' + val + '</button>';
})

//$('div').html(maps);

// js方法

function mapss() {
	var i, len = arr.length, kong = [],
		mydiv = document.getElementsByTagName('div')[0];
	for (i=0; i<len; i++) {
		kong.push('<button>' + arr[i] + '</button>');
	}
//	console.log(kong);
//	mydiv.innerHTML = kong.join('');
}
mapss();


/*-----------------------------------------------------------*/
// _.reduce方法		把数组中的所有项相加 	0为初始值

var red = _.reduce(/*arr,*//*arr1,*/obj, function(memo, num) {
	return memo + num;
//	return memo - num;

})

//console.log(red);

// js方法 

function redu() {
	var i, len = arr.length, arri = 0;
	for(i=0; i<len; i++){
		arri += arr[i];
	}
//	console.log(arri)
}
redu();

/*-----------------------------------------------------------*/
// _.find方法  	找到第一个  找到之后不会遍历整个list

var even = _.find(arr, function(val) {
	return val % 5 == 0;
})
//console.log(even);

// js方法
function fin() {
	var i, len = arr.length;
	for (i=0; i<len; i++) {
		if (arr[i] % 3 == 0) {
			return arr[i];
		}
	};
};

//console.log(fin());

//使用find方法通过对象中的一个属性得到整个对象
var stu = _.find(students, function(asd, asf) {
	return asd.name == '吕布';
});

//console.log(stu);

// js方法

function finds() {
	for (e in students) {
		if (students[e].name == '吕布') {
			return students[e];
		};
	}
};

//console.log(finds());

/*-----------------------------------------------------------*/
//_.filter方法  遍历list中的每一个值    返回一个真值

var fil = _.filter(students, function(val) {
	return val.age > 22;
})
//console.log(fil);
// js方法
function filte() {
	var i, len = students.length, kongs = [];
	for (i=0; i<len; i++) {
		if (students[i].age > 22) {
			kongs.push(students[i]);
		}
	}
	return kongs;
}
var text = filte();

for (v in text) {
//	console.log(text[v].name)
}

/*-----------------------------------------------------------*/
// _.where方法  

var tsg = _.where(students, {age: 22, gender: '女'});
//console.log(tsg);

//js方法

function whe() {
	
}
whe();

/*-----------------------------------------------------------*/
// _.every方法	如果每一项都为true就为true   如果有一项是false就为false

var ever = _.every(students, function(val, key) {
	return val.age > 20;
});
//console.log(ever);

// js方法

function evers(m) {
	var i, len = students.length;
	for (i=0; i<len; i++) {
		if(students[i].age > m){
			return true;
		}
	}
	return false;
}
//console.log(evers(10));

/*-----------------------------------------------------------*/
//  _.contains方法 	看是否包含

var conta = _.contains(arr1, 1);
//console.log(conta);

//js方法
function con(n) {
	var i, len = arr1.length;
	for (i=0; i<len; i++) {
		if (arr1[i] == n) {
			return true;
		}
		return false;
	}
}

//console.log(con('a'));

/*-----------------------------------------------------------*/
//_.pluck方法		萃取

var plu = _.pluck(students, 'name');
//console.log(plu)

var sor = _.sortBy(students, 'age');
//console.log(sor);






















































































