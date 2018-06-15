/**
 * Created by 61576 on 2018/5/8.
 */

const express  =require('express')
const app = new express()
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.static('public'));
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', ['accessToken','accesstocken','cache-control','expires','language','pragma']);
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);

// app.post('/user',function(req,res){
//     console.log(req)
//     console.log("========================================")
//     console.log(req.headers)
//     console.log("========================================")
//     console.log(req.body)
//     console.log(req.cookies)
//     console.log(req.hostname)
//     console.log(req.ip)
    
//     res.send('hello world')
// })



app.get('/videoResources',function(req,res){
    console.log(req.param)
    console.log("========================================")
    console.log(req.headers)
    console.log("========================================")
    console.log(req.body)
    console.log(req.cookies)
    console.log(req.hostname)
    console.log(req.ip)
    
    res.sendFile('/home/likewise-open/SENSETIME/wangpan/MyProjects/express/mook/equipment/videoResources.json')
})

app.post('/videoResources/platforms',function(req,res){
    
    res.sendFile('/home/likewise-open/SENSETIME/wangpan/MyProjects/express/mook/equipment/videoResources/platform.json')
})
app.get('/videoResourceGroups/resource',function(req,res){
    res.sendFile('/home/likewise-open/SENSETIME/wangpan/MyProjects/express/mook/equipment/videoResourceGroups/resource.json')
})
app.get('/targetLibraries/selectList',function(req,res){
    res.sendFile('/home/likewise-open/SENSETIME/wangpan/MyProjects/express/mook/equipment/targetLibraries/selectList.json')
})

app.get('/videoResources/sources',function(req,res){
    res.send("hello")
})

app.get('/videoResourceGroups/group',function(req,res){
    res.sendFile('/home/likewise-open/SENSETIME/wangpan/MyProjects/express/mook/equipment/videoResourceGroups/group.json')
})
// 打开摄像头s
// app.post('/videoResources/cancelAccess/:param',function(req,res){  
//     console.log(req.params)
//     console.log("fsdfs")
//     res.sendFile('/home/likewise-open/SENSETIME/wangpan/MyProjects/express/mook/equipment/videoResources/cancelAccess.json')
//     next()
// }) 

// app.param('id', function(req, res, next, id){  
//     res.sendFile('/home/likewise-open/SENSETIME/wangpan/MyProjects/express/mook/equipment/videoResources/cancelAccess.json')
//     next()
//   });  

const server = app.listen(12200,function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('http://%s:%s',host,port)
})
