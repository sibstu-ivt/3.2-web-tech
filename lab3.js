/**
 * Created by numminorihsf on 27.11.15.
 */
(function(){
  window.addEventListener('load', function(){
    var year = +prompt('Give your born year:');
    var month = prompt('Give your born month:') - 1;
    var day = +prompt('Give your born day:');
    var text = 'I was born at ' + day + ' ';
    text += [
        'January',
        'February',
        'Mart',
        'April',
        'May',
        'June',
        'Jule',
        'August',
        'September',
        'October',
        'November',
        'December'
      ][month] + ' ';
    text += year + ' year, on ';
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    text += ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];

    document.body.innerHTML = '<h1>'+text+'</h1>';
  });
})();

(function(){
  window.addEventListener('load', function(){
    var holiday = new Date();
    holiday.setDate(1);
    holiday.setMonth(0);
    holiday.setFullYear(holiday.getFullYear()+1);


    document.body.innerHTML += '<br/><h1>There are <input type="text" value="' +
        Math.ceil((holiday.getTime() - Date.now())/1000/60/60/24)+
      '"/> before holiday</h1>';
  });
})();

(function(){
  window.addEventListener('load', function(){
    function getAnswer(){
      return document.getElementById('val1').value * document.getElementById('val2').value;
    }

    document.body.innerHTML += '<br/>' +
      '<h2>Length ' +
      '<input id="val1" type="number" value="0"/> ' +
      'Width <input id="val2" type="number" value="0"/>' +
      '<button id="solve">Solve</button>' +
      '</h2>';

    document.getElementById('solve').addEventListener('click', function(){
      alert(getAnswer());
    })
  });
})();