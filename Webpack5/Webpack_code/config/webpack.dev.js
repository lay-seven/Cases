const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口
    entry: "./src/main.js", // 相对路径
    // 输出 Webpack_code\webpack..config.js
    output: {
        path: undefined,// 开发模式没有输出，不需要指定输出目录 path.resolve(__dirname, "dist"), // 绝对路径
        filename: "static/js/main.js",
        // clean: true,
    },
    // 加载器
    module: {
        rules: [
            // loader的配置
            {
                // 用来匹配.css结尾的文件
                test: /\.css$/,
                // use执行顺序为从右到左
                use: ["style-loader", "css-loader"]
            },
            {
                // 用来匹配.css结尾的文件
                test: /\.less$/,
                // use执行顺序为从右到左
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                // 识别图片资源
                test: /\.(png|jpe?g|webp|gif)$/,
                type: "asset",
                generator: {
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: "static/imgs/[hash:8][ext][query]",
                },
            },
            {
                test: /\.(ttf|woff2|map4|map3|avi)$/,
                type: "asset/resource",
                generator: {
                    // 输出名称
                    filename: "static/media/[hash:10][ext][query]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: "babel-loader",
            },
        ],
    },
    // 插件
    plugins: [
        // plugins的配置
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "../src"),
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    // 开发服务器
    devServer: {

        host: "127.0.0.1", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
        // contentBase:,
        // static: join(__dirname, './src'), // 将 src 目录下的文件，作为可访问文件。

    },
    // 模式
    mode: "development",
}