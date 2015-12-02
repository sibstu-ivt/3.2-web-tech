/**
 * Created by numminorihsf on 01.12.15.
 */
(function(){
  window.addEventListener('load', function() {

    var first = (function () {
      console.log(window);

      var MULT_X = 200;

      var START_X = 500;
      var START_Y = 0;

      var SPEED_X = 0.1;
      var SPEED_Y = 1;

      function animate(elem, rule, count){
        //console.log(elem, rule, count);
        // console.log(window.screenX, window.screenY);
        count = count || 0;
        var res = rule(count, window.innerWidth || window.screenX, window.innerHeight || window.screenY);
        elem.style.left = res.left + 'px';
        elem.style.top = res.top + 'px';
        requestAnimationFrame(animate.bind(window, elem, rule, count+1));
      }

      setTimeout(function(){
        animate(document.getElementById('first'), function(c, maxX, maxY){
          var res = {};
          res.left = (START_X + Math.floor(Math.sin(c*SPEED_X/(Math.PI*2))*MULT_X))%maxX;
          res.top = (START_Y + c*SPEED_Y)%maxY;
          return res;
        })
      },0);

      return '<div id="first" style="position:absolute;background:#122;width:10px; height:10px;left:'+START_X+'px; to:'+START_Y+'"></div>';
    })();

    var second = (function(){

      var text = 'The idea of committing dependencies has triggered ' +
        'fierce debate, mostly focussed around the pros (using a tool ' +
        'with excellent support for archiving versions, roll-back, ' +
        'etc.) and the cons (the churn in your repository, the exp' +
        'losion of commit size, the inflexibility, etc.). The debate' +
        ' is unfortunate, because it tends to assume that you have ' +
        'to choose to commit, or to not commit your dependencies, and' +
        ' many people on the pro camp seem to suggest committing your ' +
        'dependencies to your development branch. This is completely ' +
        'unnecessary. slc build will commit your dependencies and source ' +
        'onto a deploy branch, not your development or production branches.' +
        ' It will do this for both npm installed dependencies, and the ' +
        'products of custom build tools such as bower, grunt, or gulp), ' +
        'and it will not commit compiled Node binaries from add-ons ' +
        '(unless requested).';

      setTimeout(function(){
        var div = document.getElementById('second');
        function animateText(elem, text, step){
          elem.innerHTML = text.slice(0, step);

          if (step < text.length){
            var timeout = Math.floor((1 - step/text.length) * 500);
            setTimeout(function(){
              animateText(elem, text, step + 1);
            }, timeout);
          }
          else {
            setTimeout(function(){
              animateText(elem, text, 0);
            }, 5000);
          }
        }
        animateText(div, text, 0);
      },0);
      return '<div id="second">' +

        '</div>'

    })();


    var innerHtml = '<div style="height:100%">' + first + second  + '</div>';

    document.body.innerHTML = innerHtml;

  });

})();
