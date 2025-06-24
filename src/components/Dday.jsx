// src/components/Dday.jsx
import React from 'react';

const ddayList = [
  { name: "정보처리기사 실기", date: "2025-07-19" },
  
   {name: "기획발표",date:"2025-07-09"},
   {name: "최종서류제출",date:"2025-08-01"},
   {name: "최종발표자료제출",date:"2025-08-12"},
   {name: "🌟최종발표회🌟",date:"2025-08-13"},
   { name: "종강일", date: "2025-08-14" },
   { name: "🎆차주한생일🎆", date: "2025-09-04"}
];
const Dday = () => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return (
    <>
      {ddayList.map(dday => {
        let examDate = new Date(dday.date);
        examDate.setHours(0, 0, 0, 0);
        let remain = examDate - today;
        let remainDay = Math.floor(remain / (1000 * 60 * 60 * 24));
        return (
          <div key={dday.name}>
            <h3>{dday.name} D-{remainDay}</h3>
            <h3>{dday.date}<hr/></h3>
          </div>
        )
      })}
      <h3>오늘 : {today.toLocaleDateString()}</h3>
    </>
  )
}

export default Dday;