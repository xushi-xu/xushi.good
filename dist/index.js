'use strict';

console.log('llllll');

// 取出下面对象 moveList 中的subjects、rating、average、'剧情'、'喜剧
var movieList = {
    start: 0,
    count: 1,
    subjects: [{
        rating: {
            max: 10,
            min: 0,
            average: 9.6
        },
        genres: ['剧情', '喜剧'],
        casts: 1,
        title: '我不是药神'
    }]
};
var subjects = movieList.subjects;
var rating = subjects[0].rating;
var average = rating.average;
var juqing = subjects[0].genres[0];
var xiju = subjects[0].genres[1];
console.log(subjects, rating, average, juqing, xiju);
//两个变量的值互换
var a = 100;
var b = 10;
// [a, b] = [b, a];
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
// 判断this指向：箭头函数没有 this 会绑定最近的非箭头函数作用域中的this，输出下面的代码中this的指向
var show = function show() {
    console.log(undefined);
};
var obj = { show: show };
show();
obj.show();
obj.otherShow = show.bind(obj);
obj.otherShow();
// 页面中有一个列表，循环给每个列表项添加鼠标单击事件，输出对应列表项li的索引值
var indexofed = function indexofed() {
    var liArr = document.getElementsByTagName('li');
    var _loop = function _loop(i) {
        liArr[i].onclick = function () {
            console.log(i);
        };
    };

    for (var i = 0; i < liArr.length; i++) {
        _loop(i);
    }
};
indexofed();
