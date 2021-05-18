// let arr = [1, 3, 5436];
// let arr2 = arr.concat();

// let arrobject = [{ name: '张三' }, { age: 4 }]
// arrobject[0].name = "liubei"
// let arrobj = arrobject.concat();
// //浅拷贝,后面的被拷贝出来的数组，只是拷贝了索引，没有完全拷贝数据，还会跟着原体数据变动
// let arrobj3 = [...arrobject]
// let arr4 = arrobject.slice();
// console.log(arr4);
// let arr = [{ name: "loubei", age: 3 }, { name: 'zhanggei', age: 9 }];
// for (let t of arr) {
//     console.log(t);
// }
// let obj = {name:'zhangshan','lisi''wangwu'}
// for (let i in arr) {
//     console.log(i);
//     console.log(arr.i);
// }
// function* my() {
//     yield 'init';
//     yield 'start';
//     yield 'end';
// }
// let temp = my();
// console.log(temp.next());
// console.log(temp.next());
// console.log(temp.next());
// console.log(temp.next());

// do {
//     console.log(temp.next());
// } while (!temp.next().done);
let map = new Map();
map.set("zhangs", 900);
map.set("lisi", 990);
map.set("wangwu", 9);
map.set("wjfw", 800);
map.set("zs", 980);
console.log(map.get("zs"));
