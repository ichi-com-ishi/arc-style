// objectFit
objectFitImages( 'img.of-width', 'img.of-height' );

// モーダル
$( '.modal' ).modaal({
  type: 'inline', // コンテンツのタイプを指定
  animation_speed: '500', // アニメーションのスピードをミリ秒単位で指定
  background: '#333', // 背景の色を白に変更
  overlay_opacity: '0.6', // 背景のオーバーレイの透明度を変更
  fullscreen: 'false', // フルスクリーンモードにする
  background_scroll: 'true', // 背景をスクロールさせるか否か
  loading_content: 'Now Loading, Please Wait.', // 読み込み時のテキスト表示
  width: '500',
  height: '500'
});

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
