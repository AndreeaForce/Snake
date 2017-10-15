module.exports = {
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                test: /\.js&/,
                exclude: /node_modules/
            }
        ]
    }    
}