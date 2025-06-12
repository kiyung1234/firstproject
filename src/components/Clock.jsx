// src/components/Clock.jsx
import React, { useState, useEffect } from 'react';
import './clock.css'; // 필요하다면

const Clock = () => {
  const [clock, setClock] = useState('');

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
    now();
    const timer = setInterval(now, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div id="myclock" className="clock">{clock}</div>
};

export default Clock;