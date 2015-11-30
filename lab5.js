/**
 * Created by numminorihsf on 27.11.15.
 */
(function(){
  window.addEventListener('load', function(){
    var innerHtml = '<h1>Страничка по заказу</h1>' +
      '<p>Художник: <select id="select">' +
      '<option value="Тропинин">Тропинин</option>' +
      '<option value="Репин">Репин</option>' +
      '<option value="Айвазовский">Айвазовский</option>' +
      '</select></p>'+
      '<p>Подпись: <input type="text" id="sign"/></p>'+
      '<div style="display: inline-block; margin: 10px">' +
      '<p>Картинка для фона:</p>'+
      '<p><input id="bg1" class="back-radio" type="radio" name="background"/> <label>Картинка 1</label></p>' +
      '<p><input id="bg2" class="back-radio" type="radio" name="background"/> <label>Картинка 2</label></p>' +
      '<p><input id="bg3" class="back-radio" type="radio" name="background"/> <label>Картинка 3</label></p>' +
      '<p><input type="button" value="Сбросить" id="clear"/></p>' +
      '</div>' +

      '<div style="display: inline-block; margin: 10px">' +
      '<p>Декорирование текста:</p>' +
      '<p><input id="text-cursive" type="checkbox"/> <label>Курсив/нет</label></p>' +
      '<p><input id="text-underline" type="checkbox"/> <label>Подчеркнутый/нет</label></p>' +
      '<p><input id="text-bold" type="checkbox"/> <label>Жирный/нет</label></p>' +
      '<p><input type="button" value="Показать" id="show"/></p>' +
      '</div>';
    document.body.innerHTML = innerHtml;

    document.getElementById("clear").addEventListener('click', function(){
      document.body.innerHTML = innerHtml;
    });

    document.getElementById("show").addEventListener('click', function(){
      var name = document.getElementById('select').value;
      var portrait = name + '.jpg';
      var backgrounds = document.getElementsByClassName('back-radio');
      var backgroundChecked = null;
      for(var i=0; i < backgrounds.length; i++){
        if (backgrounds[i].checked){
          backgroundChecked = backgrounds[i].id;
        }
      }
      if (backgroundChecked === null){
        throw new Error('Need check background!');
      }
      var background = backgroundChecked + '.jpg';

      var style = 'font-style:' +
        (document.getElementById('text-cursive').checked ?'italic':'normal') + ';' +
      'font-weight:' +
      (document.getElementById('text-bold').checked ?'bold':'normal') + ';' +
      'text-decoration:' +
      (document.getElementById('text-underline').checked ?'underline':'none') + ';';

      var text = '<!DOCTYPE html>' +
        '<html><head></head><body style="background:' + background + '">' +
        '<h1 style="'+ style +'">'+name+'</h1>' +
        '<img src="./'+portrait+'"/>' +
        '<p style="'+ style + '">'+ document.getElementById('sign').value + '</p>' +
        '<button onclick="window.close()">Закрыть</button></body></html>';

      var newW = window.open();
      newW.document.write(text);
    });
  });

})();
