class MyVue {
    constructor (options) {
        this.$el = document.querySelector(options.el);
        this.$data = options.data || {};
    }


}