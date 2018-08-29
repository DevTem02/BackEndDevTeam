const _http=require("http");
const _app=require('./app');
const _port=process.env.env ||3001;
const _server=_http.createServer(_app);
_server.listen(_port);
