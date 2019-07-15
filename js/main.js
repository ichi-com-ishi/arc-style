// objectFit
objectFitImages( 'img.of-width', 'img.of-height' );

// ページトップへ戻る
$( function() {
  var TopBtn = $( '#pageTop' );
  TopBtn.hide();

  // スクロール位置が100でボタンを表示
  $( window ).scroll( function() {
    if ( 500 < $( this ).scrollTop() ) {
      TopBtn.fadeIn();
    } else {
      TopBtn.fadeOut();
    }
  });

  // ボタンを押下するとトップへ移動
  TopBtn.click( function() {
    $( 'body,html' ).animate(
      {
        scrollTop: 0
      },
      'slow'
    );
    return false;
  });
});
