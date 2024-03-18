/*
    HTTP response status code : html로 답변 줌

    sendStatus()

    postman
*/

const express = require('express')
const app = express()

app.get('/',(req, res)=>(){
    // res.sendStatus(200) //Ok
    res.sendStatus(400) // Bad Request, 문법이 안맞다
    
})

app.listen(3000, ()=>{
    console.log('start listening on 3000')
})