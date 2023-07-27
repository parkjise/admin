$(function(){
   // metismenu
  $('#side-menu').metisMenu();
  $('#vertical-menu-btn').on('click',function(e){
    e.preventDefault();
    $('body').toggleClass('sidebar-enable');
    992 <= $(window).width() ? $('body').toggleClass('vertical-collpsed') : $('body').removeClass('vertical-collpsed')
  })

  // fullscreen
  $('[data-bs-toggle="fullscreen"]').on('click',function(e){
    e.preventDefault();
    $('body').toggleClass('fullscreen-enable'),
    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
  })

  // right bar
  $('.right-bar-toggle').on('click',function(e){
    $('body').toggleClass('right-bar-enabled')
  })
})