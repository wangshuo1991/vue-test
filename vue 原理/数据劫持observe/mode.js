// 发布订阅模式  先订阅  再去发布  
// 主要就是一个数组关系 订阅的时候是往数组里边存函数 发布的时候就是让数组中的每一项依次执行。
// [fn1,fn2,fn3]

//绑定的方法 都有一个update属性
/* function Dep () {
    this.subs = [];
}

Dep.prototype.addSub = function (sub) {  // 订阅
    this.subs.push(sub);
}


Dep.prototype.nodtify = function () { // 发布
    this.subs.forEach(sub=>{
        sub.update()
    })
}

function Watcher (fn) {  // 观察 监控函数
    this.fn = fn;
}

Watcher.prototype.update = function () {
    this.fn();
}

let watcher = new Watcher(function () {
    console.log('observe');
});

let dep = new Dep();

dep.addSub(watcher); // 将watcher 放到了数组中 {watcher.update}
dep.addSub(watcher); // 将watcher 放到了数组中 {watcher.update}
dep.addSub(watcher); // 将watcher 放到了数组中 {watcher.update}

console.log(dep.subs);

dep.nodtify(); */

function Dep () { // 发布的构造函数
    this.subs = [];
}

Dep.prototype.addSubs = function (sub) {
    this.subs.push(sub);
}

Dep.prototype.notify = function () {
    this.subs.forEach(sub=>{
        sub.update();
    })
}

function Watcher (fn) {
    this.fn = fn;
}

Watcher.prototype.update = function () {
    this.fn();
}

let watcher1 = new Watcher(function () {
    console.log('watcher1 function');
});

let watcher2 = new Watcher(function () {
    console.log('watcher2 function');
});

let dep = new Dep();

dep.addSubs(watcher1);
dep.addSubs(watcher2);


dep.notify();






