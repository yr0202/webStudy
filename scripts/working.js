// pages 폴더 안에 working.js 생성하고 아래 코드 저장
const cp_h1 = document.body.qeerySelector('#_h1')
            let num = 1

            setInterval(()=>{
                cp_h1.textContent = num
                num += 1
            },1000)