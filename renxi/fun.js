/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function($) {
  $.fn.typewriter = function() {
    this.each(function() {
      var $ele = $(this), str = $ele.html(), progress = 0;
      $ele.html('');
      var timer = setInterval(function() {
        var current = str.substr(progress, 1);
        if (current == '<') {
          progress = str.indexOf('>', progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

function timeElapse(d){
  
  const date = new Date('2022-03-09: 22: 18: 00').valueOf();

  const currentDate = new Date().valueOf();
  
  const timeDiff = currentDate - date;


  var days = parseInt(timeDiff / (1000 * 60 * 60 * 24));
  var hours = parseInt((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = parseInt((timeDiff % (1000 * 60)) / 1000);
  
  var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + (hours < 10 ? '0'+hours : hours) + "</span> 小时 <span class=\"digit\">" + (minutes < 10 ? '0'+minutes : minutes) + "</span> 分钟 <span class=\"digit\">" + (seconds < 10 ? '0'+seconds : seconds) + "</span> 秒";
  $("#clock").html(result);
}
