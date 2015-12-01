/**
 * Created by numminorihsf on 01.12.15.
 */
(function(){
  window.addEventListener('load', function() {


    var first = (function () {
      var styles = [
        {fill: 'red', border: 'blue', ru: 'синий'},
        {fill: 'blue', border: 'red', ru: 'красный'}
      ];
      var current = -1;

      function getNext() {
        if (++current >= styles.length) {
          current = 0;
        }
        return styles[current];
      }

      function getStyle(next) {
        return 'width: 250px; height: 250px; background-color:' +
          next.fill +
          ';border: 10px inset ' + next.border + ';';
      }

      setTimeout(function () {
        var elem = document.getElementById('switching');
        var but = document.getElementById('switching-button');
        but.addEventListener('click', function(){
          var next = getNext();
          but.innerHTML = 'Изменить цвет на ' + next.ru;
          elem.style = getStyle(next);
        })
      }, 0);
      var next = getNext();

      return '<div><div id="switching" style="' + getStyle(next) + '"></div>' +
        '<button id="switching-button">Изменить цвет на ' + next.ru + '</button></div>'
    })();

    var second = (function(){
      function getCard(pic, bord){
        var current = 0;
        function getNext() {
          current = + !current;
          return current;
        }
        var id = pic + bord;
        var bid = '~'+pic + bord;

        function getStyle(current) {
          return {margin: '5px', padding: '5px', display: (current ? 'block' : 'none'),
            border: '50px outset ' + bord };
        }

        setTimeout(function () {
          document.getElementById(bid).addEventListener('click',function(){
            var elem = document.getElementById(id);
            var but = document.getElementById(bid);
              var next = getNext();
              but.innerHTML = (next ? 'Спрячь меня' : 'Покажи меня');
              elem.style.margin = getStyle(next).margin;
              elem.style.padding = getStyle(next).padding;
              elem.style.display = getStyle(next).display;
              elem.style.border = getStyle(next).border;
          });
        }, 0);

        var next = getNext();

        function getStyleString (style){
          return 'border: '+style.border+'; margin:'+style.margin+'; padding:'+style.padding+'; display:'+style.display;
        }
        return '<div style="display: inline-block; text-align: center">' +
          '<div><img id="'+id+'" style="' + getStyleString(getStyle(next)) + '" src="'+pic+'"/></div>' +
          '<button id="'+bid+'">' +
            (next ? 'Спрячь меня' : 'Покажи меня') +
          '</button></div>';
      }

      return '<div style="background-color: blue;">' +
          getCard('./pic1.jpg', '#ffa089') +
          getCard('./pic2.jpg', '#89ffa0') +
        '</div>'

    })();

    var third = (function(){

      setTimeout(function(){
        var img = document.getElementById("child");
        var bg = document.getElementById("parent");
        function maxY (){
          return bg.offsetTop + bg.offsetHeight - img.offsetHeight;
        }
        function maxX(){
          return bg.offsetLeft + bg.offsetWidth - img.clientWidth;
        }
        var TIMEOUT = 15;
        (function next(curPosX, curPosY, flow){
          img.style.position = 'absolute';
          img.style.left = curPosX + 'px';
          img.style.top = curPosY + 'px';
          if (curPosX >= maxX() && curPosY >= maxY()) return;

          if (flow === 0){
            setTimeout(function () {
              next(curPosX, curPosY+1, (curPosY+1 < maxY()) ? 0 : 1)
            }, TIMEOUT);
          }
          else if (flow === 1){
            setTimeout(function () {
              next(curPosX + 1, curPosY, ((curPosX + 1 - bg.offsetLeft) % img.clientWidth === 0) ? 2 : 1);
            }, TIMEOUT);
          }
          else if (flow === 2){
            setTimeout(function () {
              next(curPosX, curPosY-1, (curPosY - 1 - bg.offsetTop > 0) ? 2 : 3);
            }, TIMEOUT);
          }
          else if (flow === 3){
            setTimeout(function () {
              next(curPosX + 1, curPosY, ((curPosX + 1 - bg.offsetLeft) % img.clientWidth === 0 || curPosX + 1 > maxX()) ? 0 : 3);
            }, TIMEOUT);
          }
        })(bg.offsetLeft, bg.offsetTop, 0);
      }, 200);
      return '<div id="parent" style="height: 50%; width: 50%; background: #ffff00"' + /*url(p5_0.jpg) + */'">' +
        '<img id="child" src="4.gif"/>' +
        '</div>'
    })();
    var innerHtml = '<div style="height:100%">' + first + second + third + '</div>';

    document.body.innerHTML = innerHtml;

  });

})();
