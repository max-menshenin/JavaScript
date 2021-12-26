const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

let clickCount = 0;

function makeGreen() {
  trafficLightEl.style.background = 'green';
  trafficLightEl2.style.background = 'black';
  trafficLightEl3.style.background = 'black';
  clickCount += 1;
}
function makeYellow() {
  trafficLightEl.style.background = 'black';
  trafficLightEl2.style.background = 'yellow';
  trafficLightEl3.style.background = 'black';
  clickCount += 1;
}
function makeRed() {
  trafficLightEl.style.background = 'black';
  trafficLightEl2.style.background = 'black';
  trafficLightEl3.style.background = 'red';
  clickCount = 0;
}

function getCircle() {
 switch (clickCount) {
   case 0:
     makeGreen();
     break;
    case 1:
      makeYellow();
     break;
    case 2: makeRed();
 } 
}
trafficLightEl.addEventListener('click',getCircle);
trafficLightEl2.addEventListener('click',getCircle);
trafficLightEl3.addEventListener('click',getCircle)