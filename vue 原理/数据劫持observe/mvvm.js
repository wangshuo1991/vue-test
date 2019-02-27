
// 主要的构造函数
function Cue (options={}) {
    this.$options = options; // 将所有的属性挂载到$options上边
    var data = this._data = this.$options.data;
    // 观察对象
    observe(data);
    // 把数据直接挂载到 this 实例上，通过观察赋值，实现this.a = ssss
    for (const key in data) {
       Object.defineProperty(this,key,{ // 观察 this 这个实例对象
           enumerable: true,
           get () {
               return this._data[key];// this.a = this._data[a]
           },
           set (newval) {
                this._data[key] = newval;
           }
       })
    }

    // 实现computed
    initComputed.call(this); 

    new Compile(options.el,this);

}

// computed 

function initComputed () {
    let vm = this;
    let computed = this.$options.computed;
    Object.keys(computed).forEach(function (k) {
        Object.defineProperty(vm,k,{
            get () {

            },
            set () {

            }
        });
    })
}


// 编译
function Compile (el,vm) {
    // el 表示替换的范围
    vm.$el = document.querySelector(el); 
    let drag = document.createDocumentFragment();
    while(child=vm.$el.firstChild){
        drag.appendChild(child);
    }
    replace(drag);
    function replace (target) {
        Array.from(target.childNodes).forEach(node=>{

           // console.log('node',node);

            let text = node.textContent;
            let reg = /\{\{(.*)\}\}/;
            if(node.nodeType===1&&reg.test(text)){
                let ary = RegExp.$1.split('.');// [a,a]
                let val = vm;
                ary.forEach(function (k) { // 取出 this.a.a / this.b

                    // 这是低配版的 vue，所以在匹配正则的时候 注意
                    // 模板引擎的写法不能有空格 {{a}} 不能是 {{ a }}
                    // 否则匹配不到
                    val = val[k];
                })


                new Watcher(vm,RegExp.$1,function (newVal) { // 函数中 需要接受一个新的值
                    node.textContent = text.replace(/\{\{(.*)\}\}/,newVal);
                })

                // 这里是替换的逻辑 
                node.textContent = text.replace(/\{\{(.*)\}\}/,val);
            }
            if(node.nodeType===1){
                let nodeAtrrs = node.attributes;
                //console.log('attrs',nodeAtrrs);
                //NamedNodeMap {0: type, 1: v-model, type: type, v-model: v-model, length: 2}

                Array.from(nodeAtrrs).forEach(attr=>{
                    //console.log(attr.name); // type model
                    let exp = attr.value;
                    if (attr.name.indexOf('v-')==0) {
                        node.value = vm[exp];
                    }
                    new Watcher(vm,exp,function (newVal) {
                        // watcher 触发时 会自动将内容补充到input中
                        node.value = newVal;

                    })

                    node.addEventListener('input',function (e) {
                        let newVal = e.target.value;
                        vm[exp] = newVal;
                    });
                });



            }
            if(node.childNodes){
                replace(node);
            }
        })
    }
    vm.$el.appendChild(drag);
}

// 观察劫持数据
function Observe (data) {

    // 这里开启订阅数组
    let dep = new Dep();

    for(let key in data){

        let val = data[key];
        
        // 容易忘掉
        observe(val);

        // 把 data 属性 通过 object.defineProperty的方式
        // 定义属性
        Object.defineProperty(data,key,{
            enumerable: true,
            get () {

                // 取值的时候 就把这个值放进 watcher 中进行监控
                Dep.target && dep.addSub(Dep.target);

                return val;
            },
            set (newVal) { // 更改值的时候
                if(newVal === val){ // 设置的值是一样的
                    return;
                }  
                val = newVal;
                // 以后获取值得时候 将刚才设置最新值
                // return出去

                observe(newVal);

                // 然后再取值的时候 开启订阅模式 执行更新数据的方法
                dep.notify();// 让所有的watcher的update方法执行
            }
        })
    }
}

function observe (data) {
    if(typeof data != 'object') return;
    return new Observe(data);
}

// vue 不能新增不存在的属性 因为不存在的属性没有get set，就不会监控数据的变化

// 深度响应原理： 每次赋予一个新对象的时候 会给这个新对象增加数据劫持

// 发布订阅 -> 实现数据的关联 观察数据的变化 一旦变化 就更新视图
function Dep () {
    this.subs = [];
}

Dep.prototype.addSub = function (sub) {  // 订阅
    this.subs.push(sub);
}

Dep.prototype.notify = function () { // 发布
    this.subs.forEach(sub=>{
        sub.update()
    })
}

// watcher
function Watcher (vm,exp,fn) {  // 观察 监控函数
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;// 添加到订阅中

    // 以下代码 骨骼清奇

    Dep.target = this;
    let val = vm;
    let ary = exp.split('.');
    ary.forEach(function (k) { // 取值 this.a.a 
        val = val[k];
    });
    Dep.target = null;
    
}

Watcher.prototype.update = function () {
    let val = this.vm;
    let ary = this.exp.split('.');
    ary.forEach(function (k) { // 取值 this.a.a
        val = val[k];
    });
    this.fn(val);
}