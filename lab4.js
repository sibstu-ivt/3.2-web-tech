/**
 * Created by numminorihsf on 27.11.15.
 */
/**
 * Created by numminorihsf on 27.11.15.
 */
(function(){
  window.addEventListener('load', function(){
    document.body.innerHTML = '<h1>Генератор</h1>' +
      '<p>Имя: <input type="text" id="name"/></p>'+
      '<p>Любимое занятие: <input type="text" id="doing"/></p>'+
      '<p>Друг героя: <input type="text" id="friend"/></p>'+
      '<p>Любимый подарок: <input type="text" id="present"/></p>'+
      '<p><input type="button" value="Сгенерировать" id="generate"/></p>';

    document.getElementById("generate").addEventListener('click', function(){
      var newW = window.open();
      var name = document.getElementById('name').value;
      var doing = document.getElementById('doing').value;
      var friend = document.getElementById('friend').value;
      var present = document.getElementById('present').value;

      newW.document.write('<!DOCTYPE html>');
      newW.document.write('<html><head></head><body>' +
        '<h1>'+name+' и '+ present+'</h1>' +
        '<p>В одном лесу жила маленькая ' +
        name +
        ', которая очень любила ' +
        doing +
        ' чудесные песни. ' +
        'У нее так хорошо получалось, что весь лес собирался послушать ее! ' +
        'От сороки она узнала, что у людей принято дарить ' +
        present +
        ' любимым исполнителям. А ' +
        present +
        ' она любила также сильно, как и ' +
        doing +
        '. Долго грустила ' +
        name +
        '. Но однажды, после очередного импровизированного концерта, ' +
        friend +
        ' подлетел к ' +
        name +
        ' и подарил ей... ' +
        present +
        '! Уж он то был истинным джентельменом! ' +
        name +
        ' была невероятно счастлива!!!</p>' +
        '<button onclick="window.close()">Закрыть</button></body></html>');
    });
  });

})();
