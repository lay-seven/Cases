const path = require("path");

module.exports = {
    // 入口
    entry: "./src/main.js", // 相对路径
    // 输出 Webpack_code\webpack..config.js
    output: {
        path: path.resolve(__dirname, "dist"), // 绝对路径
        filename: "static/js/main.js",
        clean:true,
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
        ],
    },
    // 插件
    plugins: [
        // plugins的配置
    ],
    // 模式
    mode: "development",
}