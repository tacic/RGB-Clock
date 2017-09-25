function getTimeOfDay() {
  var date = new Date();
  return [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ].map(function(time) {
    return time < 10 ? '0' + time : String(time); 
  }).join('');
}

function getColor(time) {
  var color = '#' + time;
  document.body.style.backgroundColor = color;
  var clock = document.getElementById('clock');
  clock.textContent = color; 
}

function compose(f, g) {
  return function() {
    return f(g());
  }
}

function stopClick(clear, name) {
  document.body.addEventListener('click', function(event) {
    clear(name); 
  });
}

function startClick(callback) {
  document.body.addEventListener('dblclick', function(event) {
    callback(); 
  });
}

function init() {
  var tick = setInterval(compose(getColor, getTimeOfDay), 1000);
  stopClick(clearInterval, tick);
  startClick(init);
}

window.onload = init;
