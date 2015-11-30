/**
 * Created by numminorihsf on 27.11.15.
 */
(function(){
  window.addEventListener('load', function(){
    var innerHtml = '<div style="color: #444444"><h1>Наведи курсор на название животного</h1>' +
        '<table style="border: 1px solid #444444">' +
          '<tr>' +
            '<td id="hip" style="padding: 5px;border: 1px solid #444444">БЕГЕМОТ</td>' +
            '<td rowspan="3" style="padding: 5px;border: 1px solid #444444">' +
              '<img id="img" src="empty-1.jpg"/>' +
            '</td>' +
          '</tr>' +
          '<tr>' +
            '<td id="ack" style="padding: 5px;border: 1px solid #444444">АКУЛА</td>' +
          '</tr>' +
          '<tr>' +
            '<td id="mam" style="padding: 5px;border: 1px solid #444444">МАМОНТ</td>' +
          '</tr>' +
      '</table>' +
      '</div>';
    document.body.innerHTML = innerHtml;


    document.getElementById("hip").addEventListener('mouseEnter', function(){

    });

    document.getElementById("show").addEventListener('mouseEnter', function(){
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
