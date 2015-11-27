/**
 * Created by numminorihsf on 27.11.15.
 */
(function() {
  var family = prompt('Give your surname:');
  var gender = prompt('Give your gender:');
  var age = Number(prompt('Give your age:'));

  var askString = 'Does it right?\n' + 'Surname:\t' + family + '\n' +
    'gender:\t' + gender + '\n' +
    'age:\t' + age;

  if (confirm(askString)) {
    alert('Good, ' + family + '!');
  }
  else {
    alert('Data fail.');
  }
})();

(function(){
  var first = +prompt('First number:');
  var second = +prompt('Second number:');
  var action = {
    '+': function(a,b){return a+b},
    '-': function(a,b){return a-b},
    '*': function(a,b){return a*b},
    '/': function(a,b){return b === 0 ? 'Error' : a/b;}
  }[prompt('action')];
  alert(typeof action === 'function' ? action(first, second) : 'Error');

})();

(function(){
  function draw(size, c1, c2, rule){
    var CELL_SIZE = '10px';
    var BORDER_SIZE = '3px';
    document.write('<table style="border: 10px solid #fff">');
    for(var i = 0; i < size; i++){
      document.write('<tr>');
      for(var j = 0; j < size; j++){
        document.write('<td style="' +
          'height:'+CELL_SIZE + '; ' +
          'width:'+CELL_SIZE+'; ' +
          'border:'+BORDER_SIZE+' solid #fff' + '; ' +
          'background-color: ' + [c1, c2][rule(i, j, size)] +
          '"></td>');
      }
      document.write('</tr>');
    }
    document.write('</table>');
  }

  draw(10,'#0ff', '#00f', function(i,j, size){
    return Number(i + j >= Math.floor(size * 0.8));
  });
  draw(10, '#f88', '#0f0', function(i, j){
    return Number((i + j + 1) % 3 === 0);
  });


})();