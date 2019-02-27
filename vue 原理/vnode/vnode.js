// 简单的  VNode 类
/**
 * @param   tag  -> 当前节点的标签名
 * @param   data -> 当前节点的一些数据信息，比如 props、attrs 等数据
 * @param   children -> 当前节点的子节点，是一个数组
 * @param   text -> 当前节点的文本
 * @param   elem -> 当前虚拟节点对应的真实 dom 节点
 */
class Vnode {
    constructor (tag, data, children, text, elm) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elem = elem;
    }
}