/*!
 * jQuery Scrollbox
 * (c) 2009-2013 Hunter Wu <hunter.wu@gmail.com>
 * MIT Licensed.
 *
 * http://github.com/wmh/jquery-scrollbox
 */

(function($) {

$.fn.scrollbox = function(config) {
  //default config
  var defConfig = {
    linear: false,          // Scroll method
    startDelay: 2,          // Start delay (in seconds)
    delay: 3,               // Delay after each scroll event (in seconds)
    step: 5,                // Distance of each single step (in pixels)
    speed: 32,              // Delay after each single step (in milliseconds)
    switchItems: 1,         // Items to switch after each scroll event
    direction: 'vertical',
    distance: 'auto',
    autoPlay: true,
    onMouseOverPause: true,
    paused: false,
    queue: null
  };
  config = $.extend(defConfig, config);
  config.scrollOffset = config.direction === 'vertical' ? 'scrollTop' : 'scrollLeft';
  if (config.queue) {
    config.queue = $('#' + config.queue);
  }

  return this.each(function() {
    var container = $(this),
        containerUL,
        scrollingId = null,
        nextScrollId = null,
        paused = false,
        backward,
        forward,
        resetClock,
        scrollForward,
        scrollBackward;

    if (config.onMouseOverPause) {
      container.hover(function() {
        paused = true;
      }, function() {
        resetClock();
        paused = false;
      })
    }
    containerUL = container.children('ul:first-child');

    scrollForward = function() {
      if (paused) {
        return;
      }
      var curLi,
          i,
          newScrollOffset,
          scrollDistance,
          theStep;

      container.trigger('moving', 'forward');
      curLi = containerUL.children('li:first-child');

      scrollDistance = config.distance !== 'auto' ? config.distance :
        config.direction === 'vertical' ? curLi.height() : curLi.width();

      // offset
      if (!config.linear) {
        theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * 0.3, 10));
        newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance);
      } else {
        newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance);
      }
      container[0][config.scrollOffset] = newScrollOffset;

      if (newScrollOffset >= scrollDistance) {
        for (i = 0; i < config.switchItems; i++) {
          if (config.queue && config.queue.hasChildNodes() && config.queue.getElementsByTagName('li').length > 0) {
            containerUL.append(config.queue.getElementsByTagName('li')[0]);
            containerUL.remove(containerUL.children('li:first-child'));
          } else {
            containerUL.append(containerUL.children('li:first-child'));
          }
        }
        container[0][config.scrollOffset] = 0;
        clearInterval(scrollingId);
        if (config.autoPlay) {
          nextScrollId = setTimeout(forward, config.delay * 1000);
        }
      }
      container.trigger('move');
    };

    // Backward
    // 1. If forwarding, then reverse
    // 2. If stoping, then backward once
    scrollBackward = function() {
      if (paused) {
        return;
      }
      var curLi,
          i,
          liLen,
          newScrollOffset,
          scrollDistance,
          theStep;

      container.trigger('moving', 'backward');
      // init
      if (container[0][config.scrollOffset] === 0) {
        liLen = containerUL.children('li').length;
        for (i = 0; i < config.switchItems; i++) {
          containerUL.children('li:last-child').insertBefore(containerUL.children('li:first-child'));
        }

        curLi = container.children('li:first-child');
        scrollDistance = config.distance !== 'auto' ?
            config.distance :
            config.direction === 'vertical' ? curLi.height() : curLi.width();
        container[0][config.scrollOffset] = scrollDistance;
      }

      // new offset
      if (!config.linear) {
        theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * 0.3, 10));
        newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0);
      } else {
        newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0);
      }
      container[0][config.scrollOffset] = newScrollOffset;

      if (newScrollOffset === 0) {
        clearInterval(scrollingId);
        if (config.autoPlay) {
          nextScrollId = setTimeout(forward, config.delay * 1000);
        }
      }

      container.trigger('move');
    };

    forward = function() {
      clearInterval(scrollingId);
      scrollingId = setInterval(scrollForward, config.speed);
    };

    backward = function() {
      clearInterval(scrollingId);
      scrollingId = setInterval(scrollBackward, config.speed);
    };

    resetClock = function(delay) {
      config.delay = delay || config.delay;
      clearTimeout(nextScrollId);
      if (config.autoPlay) {
        nextScrollId = setTimeout(forward, config.delay * 1000);
      }
    };

    if (config.autoPlay) {
      nextScrollId = setTimeout(forward, config.startDelay * 1000);
    }

    // bind events for container
    container.bind('resetClock', function(delay) { resetClock(delay); });
    container.bind('forward', function() { clearTimeout(nextScrollId); forward(); });
    container.bind('backward', function() { clearTimeout(nextScrollId); backward(); });
    container.bind('pause', function() { paused = true; })
    container.bind('resume', function() { paused = false; })
    container.bind('speedUp', function(speed) {
      if (typeof speed === 'undefined') {
        speed = Math.max(1, parseInt(config.speed / 2, 10));
      }
      config.speed = speed;
    });
    container.bind('speedDown', function(speed) {
      if (typeof speed === 'undefined') {
        speed = config.speed * 2;
      }
      config.speed = speed;
    });
  });
};

}(jQuery));