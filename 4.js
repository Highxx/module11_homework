function getTwoNumbers() {
    let i = 5;
    let timerId = setInterval(function() {
      console.log(i);
      if (i == 15) clearInterval(timerId);
      i++;
    }, 1000);
  }
  
  getTwoNumbers();