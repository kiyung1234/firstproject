import React, { useState, useEffect } from 'react'
import './clock.css'

function App() {
let today = new Date()
let dDay = new Date('2025-07-19')
today.setHours(0, 0, 0, 0);    // 시간 0시로 맞추기
dDay.setHours(0, 0, 0, 0); // 시간 0시로 맞추기
let remain = dDay-today
let remainDay = Math.floor(remain / (1000 * 60 * 60 * 24));
   // 시계 state
  const [clock, setClock] = useState('');

  // 시계 useEffect
  useEffect(() => {
    function now() {
      const date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      let str = "AM";
      if (h >= 12) {
        if (h > 12) h -= 12;
        str = "PM";
      }
      if (h === 0) h = 12;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      setClock(h + ":" + m + ":" + s + str);
    }

    now(); // 최초 1회 실행
    const timer = setInterval(now, 1000);
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

console.log(remainDay)
  return (
    <>
    <h1>정보처리기사 실기 시험 D-{remainDay}</h1>
    <h3>오늘 : {today.toLocaleDateString()}</h3>
    <div id="myclock" className="clock">
        {clock}
    </div>
 <h3>정보처리기사 실기 시험일 2025.07.19 </h3>
    </>
  )
}

export default App
