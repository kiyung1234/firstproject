import React from 'react'


function App() {
let today = new Date()
let dDay = new Date('2025-07-19')
let remain = dDay-today

let remainDay = Math.ceil(remain / (1000 * 60 * 60 * 24));
console.log(remainDay)
  return (
    <>
    <h1>정보처리기사 실기 시험 D-{remainDay}</h1>
    <h3>오늘 : {today.toLocaleDateString()}</h3>

 <h3>정보처리기사 실기 시험일 2025.07.19 </h3>
    </>
  )
}

export default App
