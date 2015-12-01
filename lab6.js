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

    function onHover (pic){
        document.getElementById('img').src=pic;
    }
    function onLeave (){
        document.getElementById('img').src='empty-1.jpg';
    }

    function addListeners (id, pic){
      document.getElementById(id).addEventListener('mouseenter', onHover.bind(null, pic));
      document.getElementById(id).addEventListener('mouseleave', onLeave);
    }

    addListeners('hip', 'gippopotam-1.jpg');
    addListeners('ack', 'akula-1.jpg');
    addListeners('mam', 'hobot-1.jpg');
  });

})();
