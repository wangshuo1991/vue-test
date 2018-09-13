// 这个配置文件，其实就是一个js文件 通过 Node 中的模块操作，向外暴露一个配置对象
const path = require('path');


const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),// 入口 表示要使用 webpack 打包哪个文件
    output: { // 输出文件的相关配置
        path: path.join(__dirname, './dist'), // 制定打包好的文件 输出到那个目录中去
        filename: 'bundle.js' //指定输出文件的名称
    },
    module: { // 这个节点 配置 所有第三方模块加载器
        rules: [ // 所有第三方 匹配规则
            {test: /\.css$/,use: ['style-loader','css-loader']}, // 配置 处理 css文件的第三方模块
            {test: /\.less$/,use: ['style-loader','css-loader','less-loader']}, //配置处理less文件的 第三方规则
            {test: /\.scss$/,use: ['style-loader','css-loader','sass-loader']}, //配置处理sass文件的 第三方规则
            {test: /\.(jpg|png|gif|jpeg|bmp)$/,use: 'url-loader?limit=67868&name=[name].[ext]'}, //处理图片路径的loader
            {test: /\.(ttf|eot|svg|woff|woff2$)/,use: 'url-loader'}, //处理字体文件
            {test: /\.js$/,use: 'babel-loader',exclude: /node_modules/},  //匹配 es6 ，exclude 是排除node安装包 浪费性能
            {test: /\.vue$/,use: 'vue-loader'}
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development', // 设置mode

    performance: {
 
        hints:false  //取出一些警告   
        
    }
        
    
}