var path=require('path');
var express=require('express');
var app=express();
var viewsPath=path.join(__dirname,'views');
console.log(viewsPath);
app.use('/',express.static(viewsPath));
var publicPath=path.join(__dirname,'public');
app.use('/public',express.static(publicPath));
app.listen(9999,function(){
	console.log('server run at port 9999')
});
module.exports=app;
