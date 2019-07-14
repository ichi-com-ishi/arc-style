// トップスライダー1
var mySwiper = new Swiper( '.swiper-main', {
  loop: true,
  virtualTranslate: false,
  roundLengths: false,
  autoplay: {
    delay: 5000
  },
  speed: 2000

  // effect: "fade"
});

// トップスライダー2
var mySwiper = new Swiper( '.swiper-reform ', {
  navigation: {
    nextEl: '.swiper-reform-next',
    prevEl: '.swiper-reform-prev'
  },
  pagination: {
    el: '.swiper-reform-page',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  slidesPerView: 5.5,
  spaceBetween: 30,
  initialSlide: 0,
  centeredSlides: true,
  loop: true,
  speed: 1500,
  breakpoints: {
    1200: {
      slidesPerView: 4.5
    },
    800: {
      slidesPerView: 3.5
    },
    700: {
      slidesPerView: 2.5
    },
    600: {
      slidesPerView: 1.5
    }
  }
});

// トップスライダー3
var mySwiper = new Swiper( '.swiper-exterior', {
  navigation: {
    nextEl: '.swiper-exterior-next',
    prevEl: '.swiper-exterior-prev'
  },
  pagination: {
    el: '.swiper-exterior-page',
    type: 'bullets',
    clickable: true
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  slidesPerView: 5.5,
  spaceBetween: 30,
  initialSlide: 0,
  centeredSlides: true,
  loop: true,
  speed: 1500,
  breakpoints: {
    1200: {
      slidesPerView: 4.5
    },
    800: {
      slidesPerView: 3.5
    },
    700: {
      slidesPerView: 2.5
    },
    600: {
      slidesPerView: 1.5
    }
  }
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
