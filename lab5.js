/**
 * Created by numminorihsf on 27.11.15.
 */
(function(){
  window.addEventListener('load', function(){
    document.body.innerHTML = '<h1>Страничка по заказу</h1>' +
      '<p>Художник: <select id="select">' +
      '<option value="Тропинин">Тропинин</option>' +
      '<option value="Репин">Репин</option>' +
      '<option value="Айвазовский">Айвазовский</option>' +
      '</select></p>'+
      '<p>Подпись: <input type="text" id="sign"/></p>'+
      '<div style="display: inline-block; margin: 10px">' +
        '<p>Картинка для фона:</p>'+
        '<p><input id="bg1" type="radio" name="background"/> <label>Картинка 1</label></p>' +
        '<p><input id="bg2" type="radio" name="background"/> <label>Картинка 2</label></p>' +
        '<p><input id="bg3" type="radio" name="background"/> <label>Картинка 3</label></p>' +
        '<p><input type="button" value="Сбросить" id="clear"/></p>' +
      '</div>' +

      '<div style="display: inline-block; margin: 10px">' +
        '<p>Декорирование текста:</p>' +
        '<p><input id="text-cursive" type="checkbox"/> <label>Курсив/нет</label></p>' +
        '<p><input id="text-underline" type="checkbox"/> <label>Подчеркнутый/нет</label></p>' +
        '<p><input id="text-bold" type="checkbox"/> <label>Жирный/нет</label></p>' +
        '<p><input type="button" value="Показать" id="show"/></p>' +
      '</div>';

    document.getElementById("clear").addEventListener('click', function(){
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
