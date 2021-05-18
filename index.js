console.log('llllll');

// 取出下面对象 moveList 中的subjects、rating、average、'剧情'、'喜剧
let movieList = {
    start: 0,
    count: 1,
    subjects: [{
         rating: {
               max: 10,
               min: 0,
               average: 9.6,
        },
        genres: ['剧情', '喜剧'],
        casts: 1,
        title: '我不是药神',
    }]
}
let subjects = movieList.subjects;
let rating = subjects[0].rating;
let average = rating.average;
let juqing = subjects[0].genres[0];
let xiju = subjects[0].genres[1];
console.log(subjects,rating,average,juqing,xiju);
//两个变量的值互换
let a = 100;
let b = 10;
// [a, b] = [b, a];
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
// 判断this指向：箭头函数没有 this 会绑定最近的非箭头函数作用域中的this，输出下面的代码中this的指向
let show = ( ) => {
	console.log(this)
}
let obj = { show: show }
show();
obj.show();
obj.otherShow = show.bind(obj);
obj.otherShow();
// 页面中有一个列表，循环给每个列表项添加鼠标单击事件，输出对应列表项li的索引值
let indexofed = () => {
    let liArr = document.getElementsByTagName('li');
    for (let i = 0; i < liArr.length; i++) {
        liArr[i].onclick = function(){
            console.log(i)
        }
    }
}
indexofed();
