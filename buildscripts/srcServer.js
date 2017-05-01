import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req, res){
    res.json([
        {"id":16616451,"firstName":"Vilma","lastName":"Cummerata","email":"Bartholome72@yahoo.com"},
        {"id":99442990,"firstName":"Lavinia","lastName":"Powlowski","email":"Josephine76@gmail.com"},
        {"id":60866635,"firstName":"Carleton","lastName":"Cormier","email":"Bart75@hotmail.com"},
        {"id":96282023,"firstName":"Brody","lastName":"Cole","email":"Nicklaus51@hotmail.com"},
        {"id":18134034,"firstName":"Felix","lastName":"Yundt","email":"Adriana_Trantow97@yahoo.com"}
        ]);
});

app.listen(port,function(err){
    if (err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});