module.exports = {
    devServer: {
        port: '8080',
        hot: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}