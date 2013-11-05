$(document).ready(function(){

  $(".ad-cover").click(function(){
    $(this).toggleClass('closed');
  });

  var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

  if (isMobileWebkit) {
    $('html').addClass('mobile');
  }

  $(function(){
    var iScrollInstance;
    var content1Bottom = $("#content1").position().top + $("#content1").height();
    var originalAdHeight = $(".ad-cover").height();
    $(".ad-cover").height(100);
    var collapsedAdHeight = $(".ad-cover").height();
    var adBottom = $(".ad-cover").position().top + $(".ad-cover").height();
    var adIsAtBottom = content1Bottom - $(window).height() - $(window).height();
    alert( $(window).height());
    if (isMobileWebkit) {
      iScrollInstance = new iScroll('wrapper',{
        onScrollMove: function() {
          var content1BottomOffset;

          // 3 states

          // shrink ad up
          if((-iScrollInstance.y) > content1Bottom){
            $(".ad-cover").height(originalAdHeight+content1BottomOffset);
          }
          // expand ad down
          else if((-iScrollInstance.y) > adIsAtBottom){
            content1BottomOffset = (-iScrollInstance.y) - content1Bottom;
            $("#content2").prepend(content1BottomOffset);
            $(".ad-cover").height(originalAdHeight+content1BottomOffset);
          }
        }
      });

      $('#scroller').stellar({
        scrollProperty: 'transform',
        positionProperty: 'transform',
        horizontalScrolling: false,
        verticalOffset: 150
      });
    } else {
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 150
      });
    }
  });

  var adBottom = $(".ad-cover").position().top + $(".ad-cover").height();

  $(document).scroll(function(){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > adBottom){
      $(".ad-cover").addClass('closed');
    }
  });


});