const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
     }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}






/*
const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        hello: './src/hello.js'
    },
    mode: 'development',
     output: {
        path: path.resolve(__dirname, 'public'), // users\user\onedrive\documents\estudos\javascript\js4-moderno\ex016-usando-webpack\public
        filename: '[name].bundle.min.js' // [name] é necessário quando tem mais de uma entrada para diferenciar cada arquivo
    } 
}

// modo development pra quando estou desenvolvendo, o arquivo fica maior mas bem mais fácil de ser manipulado. Quando lançar o projeto alterar pra production

*/