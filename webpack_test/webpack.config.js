let path = require('path');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/js/entry.js',
    output:{
        filename:'bundle.js',
        // publicPath:
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{limit:8192}
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin(['dist']),
    ]
}