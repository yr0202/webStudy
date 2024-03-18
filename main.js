

//web server 만들기
//main.js

const express = require('express') // npm install express --save
//expressjson.com으로 설명 보기
const app = express() //express 안에 express()함수를 사용, app객체를 만들었다

// pages경로로 들어오는 요청데 대해서는
// 로컬 폴더 __dirname : main.js가 있는 폴더 위치
// __dirname + '/pages'
app.use('/pages', express.static(__dirname+'/pages'))

app.listen(3000,()=>{ // 서버가 만들어짐, 인수로 아무것도 안받는다
    console.log('3000번 포트에 귀를 대고 듣기 시작했음')
    //3000번 포트에 요청이 들어왔을때 어떤 액션을 취할건지 여기 부분에 코딩하면됨
})  // 실행 방법 => node main.js

//처리해주는 루틴들을 추가
app.get('/',(req, res)=>{
    console.log('루트에 대한 요청들어왔음')
    // res.send('루트에 대한 요청')
    res.sendFile(__dirname+'/pages/index.html')
}) //app.get('/') 목적지 구조를 폴더식으로 적어줌
// 목적지가 들어왔을때 실행되는 콜백 함수, req와 res를 받아 실행되는 함수 형식으로 되어 있다 
//req는 웹브라우저로부터 받아오는거, res는 웹브라우저로 나가는거

app.get('/about',(req, res)=>{
    console.log('about에 대한 요청들어왔음')
    // res.send('about에 대한 요청')
    res.sendFile(__dirname+'/pages/about.html')
})
app.get('/working',(req,res)=>{
    console.log('working에 대한 요청들어왔음')
    res.sendFile(__dirname+'/pages/working.html')
})
//소스코드가 수정이 되면 자동으로 재시동하는 방법
// nodemon 프로그램 설치
// npm install -g nodemon (-g는 global, 이 컴퓨터에 있는 모든 nodejs들이 다 사용할 수 있도록 설치해라)
// 실행방법 nodemon main.js


//web server 폴더 안에 html 파일 생성
//main.js랑 같은 레벨로 pages폴더를 만들고 안에 index.html about.html 만들기
//file을 웹브라우저로 보낼때는 res.sendFile(path지정)


//html안에 js코드를 넣어서 보낸다
//pages폴더 안에 working.html 생성



// js 파일을 html안에 넣지 않고 따로 만들어서 사용해보기


// 이제 working.html 코드도 수정
//working.html


//를 하면 오류남
// app.listen() 위에 추가로 써줘야하는것
// pages경로로 들어오는 요청에 대해서는
// 로컬 폴더 __dirname : main.js가 있는 폴더 위치
// __dirname + '/pages'
// app.use('/pages', express.static(__dirname+'/pages'))


//scripts 폴더를 하나 만들고 여기에 working.js를 옮겨!
//pages에는 html 파일들만 있고, scripts 파일에는 js만 있게 함
//





