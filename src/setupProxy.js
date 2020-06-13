const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/openapi-proxy.php',
        createProxyMiddleware({
            target: 'http://localhost:83',
            changeOrigin: true,
        })
    );
};