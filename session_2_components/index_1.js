let seconds = 0;
let timeInterval = null;
document.getElementById('btnStart').addEventListener('click', () => {
    timeInterval = setInterval( () => {
        seconds++;
        console.log(seconds);
        const time = formatSecond(seconds);
        document.getElementById('time').innerHTML = time;
    }, 1000)
})

// Pause
document.getElementById('btnPause').addEventListener('click', () => {
    if (timeInterval){
        clearInterval(timeInterval);
    }
});
// Stop
document.getElementById('btnStop').addEventListener('click', () => {
    if (timeInterval){
        clearInterval(timeInterval);
    }
    seconds = 0;
    document.getElementById('time').innerHTML = formatSecond(seconds);
});

function formatSecond(second){
    const n = Math.floor(second / 60);
    const s = seconds % 60;
    return n + ':' + s;
    

};