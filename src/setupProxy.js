const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/openapi',
        createProxyMiddleware({
            target: 'http://localhost:83',
            changeOrigin: true,
        })
    );
};