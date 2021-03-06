const path = require('path');

module.exports ={
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer :{
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader',
                }

            },
            {
                test: /\.css$/,
                exclude: /node_module/,
                use:[
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use:{
                    loader: 'file-loader',
                } 
            }
        ]
    }
}