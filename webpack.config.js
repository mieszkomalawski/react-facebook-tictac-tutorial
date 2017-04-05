var config = {
    entry: './main.js',

    output: {
        path:'/www/kolko_i_krzyzyk',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8082
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;