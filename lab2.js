/**
 * Created by numminorihsf on 27.11.15.
 */
(function(){
  document.write('<button id="startButton">Start</button>');
  function startDo() {
    var first = +prompt('First number:');
    var second = +prompt('Second number:');
    var action = {
      '+': function (a, b) {
        return a + b
      },
      '-': function (a, b) {
        return a - b
      },
      '*': function (a, b) {
        return a * b
      },
      '/': function (a, b) {
        return b === 0 ? 'Error' : a / b;
      }
    }[prompt('action')];
    alert(typeof action === 'function' ? action(first, second) : 'Error');
  }
  document.getElementById('startButton').addEventListener('click', startDo);
})();