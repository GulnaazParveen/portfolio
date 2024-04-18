
    const counter = document.querySelector(".counter");
    let targetNum = 1;
    const endNum = 10;

    function Counting() {
        if (targetNum <= endNum) {
            counter.innerHTML = targetNum;
            targetNum++;
        } else {
            clearInterval(clInterval);
        }
    }

    Counting();
    let clInterval = setInterval(Counting, 200); 
    const bulb = document.getElementById('bulb');

    function pulsate() {
      bulb.classList.toggle('fade');
    }
    setInterval(pulsate, 1000);

