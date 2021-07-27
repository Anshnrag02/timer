

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const PauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter =  circle.getAttribute('r')*2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
let tr;
let a;
const t = new timer(durationInput,startButton,PauseButton, {
    onStart(totalDuration) {
        console.log("start");
        duration=totalDuration;
    },
    onTick(timeRemaining) {
        
        circle.setAttribute('stroke-dashoffset', (perimeter * timeRemaining) / duration - perimeter);
    },
    onComplete() {
        console.log("stop");
    }
});
