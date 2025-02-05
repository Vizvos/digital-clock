const hourTensEl = document.getElementById("hour-tens");
const hourOnesEl = document.getElementById("hour-ones");
const minuteTensEl = document.getElementById("minutes-tens");
const minuteOnesEl = document.getElementById("minutes-ones");


function updateClock() {
  let ht = 0;
  let h = new Date().getHours();
  let ho =0;
  let m = new Date().getMinutes();
  let mt = 0;
  let mo = 0;
  
 

  if (h < 10) {
    ht = 0;
    ho = h;
  } else if (h > 9 && h < 20) {
    ht = 1;
    ho = h - 10;
  } else if (h > 19 && h < 30) {
    ht = 2;
    ho = h - 20;
  }

  if (m < 10) {
    mt = 0;
    mo = m;
  } else if (m > 9 && m < 20) {
    mt = 1;
    mo = m - 10;
  } else if (m > 19 && m < 30) {
    mt = 2;
    mo = m - 20;
  }else if (m > 29 && m < 40) {
    mt = 3;
    mo = m - 30;
  }else if (m > 39 && m < 50) {
    mt = 4;
    mo = m - 40;
  }else if (m > 49 && m < 60) {
    mt = 5;
    mo = m - 50;
  }


  hourTensEl.innerText = ht;
  hourOnesEl.innerText = ho;
  minuteTensEl.innerText = mt;
  minuteOnesEl.innerText = mo;
  
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();