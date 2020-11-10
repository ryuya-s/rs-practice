// スライドショーここから
$(function () {

  $('.slideshow').each(function () {
    var $slides = $(this).find('img'),
    slideCount = $slides.length,
    currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();

    setInterval(showNextSlide, 7000);

    function showNextSlide () {

      var nextIndex = (currentIndex + 1) % slideCount;

      $slides.eq(currentIndex).fadeOut();

      $slides.eq(nextIndex).fadeIn();

      currentIndex = nextIndex;
    }
  });
});


// スライドショーここまで


$(function() {
      /*クリックイベント*/
      $('.tab-serch-neo').on('click', function() {
        /* 一旦.tab_itemから.is-active-itemを外す */
        $('.tab-item').removeClass("main-tab");
        /* クリックした.tab-serch-neoに対応する.tab_itemに.is-active-itemをつける */
        $($(this).attr("href")).addClass("main-tab");

        $('.tab-serch').removeClass('haikei-change');
        $(this).addClass('haikei-change');

        $('.tab-serch').removeClass('col-cha');
        $(this).addClass('col-cha');
      });
    });

$(function() {
      /*クリックイベント*/
      $('.tab-serch').on('click', function() {
        /* 一旦.tab_itemから.is-active-itemを外す */
        $('.tab-serch').removeClass('haikei-change');
        $(this).addClass('haikei-change');
      });
    });


// 検索欄の表示・非表示切り替えここから

$(function () {
    $('.tab-serch-neo').click(function () {
        $('.serch-form').show();
    });
});

$(function () {
  $('.cansel').click(function () {
    $('.serch-form').hide();
  });
});


// 絞り込み条件の表示ここから


// 絞り込み条件の表示ここまで

// 検索絞り込みここからだよ〜

$(function() {
    $(".test-in div").click(function() {
        var tags = $(this).attr('id');
        $(".test-in div").removeClass('all');
        $(this).addClass('all');
        $(".kekka").hide();
        if(tags == 'one') {
            $(".kekka-1").show();
        } else if(tags == 'two') {
            $(".kekka-2").show();
        } else if(tags == 'three') {
            $(".kekka-3").show();
        } else if(tags == 'four') {
            $(".kekka-4").show();
        } else if(tags == 'five') {
            $(".kekka-5").show();
        } else if(tags == 'six') {
            $(".kekka-6").show();
        } else {
            $(".kekka").show();
        }
    });
});

// 検索絞り込みここまでだよ

// 絞り込みディズニーシーバージョンはここからだよ

$(function() {
    $(".test-in-2 div").click(function() {
        var tags = $(this).attr('id');
        $(".test-in-2 div").removeClass('all-2');
        $(this).addClass('all-2');
        $(".sea-kekka").hide();
        if(tags == 'sea-one') {
            $(".sea-kakka-1").show();
        } else if(tags == 'sea-two') {
            $(".sea-kakka-2").show();
        } else if(tags == 'sea-three') {
            $(".sea-kakka-3").show();
        } else if(tags == 'sea-four') {
            $(".sea-kakka-4").show();
        } else if(tags == 'sea-five') {
            $(".sea-kakka-5").show();
        } else if(tags == 'sea-six') {
            $(".sea-kakka-6").show();
        } else if(tags == 'sea-seven') {
            $(".sea-kakka-7").show();
        } else {
            $(".sea-kekka").show();
        }
    });
});


// 絞り込みディズニーシーバージョンはここまでだよ

// 検索パーク変更ここから
$('.test-2').hide();

$('#radio-2').on('click', () => {
  $('.test-2').show();
});

$('#radio-2').on('click', () => {
  $('.test').hide();
});

$('#radio-1').on('click', () => {
  $('.test').show();
});

$('#radio-1').on('click', () => {
  $('.test-2').hide();
});


$('.table-2').hide();

$('#radio-2').on('click', () => {
  $('.table-2').show();
});

$('#radio-2').on('click', () => {
  $('.table-1').hide();
});

$('#radio-1').on('click', () => {
  $('.table-1').show();
});

$('#radio-1').on('click', () => {
  $('.table-2').hide();
});

// 検索パーク変更ここまで

// 検索画像変更ここから

$(function() {

    $(".change-wb").hover(function() {

        $(".change-img-1").show();

        $(".change-img-2").hide();

        $(".change-img-3").hide();
        $(".change-img-4").hide();
        $(".change-img-5").hide();
        $(".change-img-6").hide();
        // $(".change_text").text("赤い丸は情熱的ですね");

    });

    $(".change-al").hover(function() {

        $(".change-img-2").show();

        $(".change-img-1").hide();

        $(".change-img-3").hide();
        $(".change-img-4").hide();
        $(".change-img-5").hide();
        $(".change-img-6").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });

    $(".change-wl").hover(function() {

        $(".change-img-3").show();

        $(".change-img-2").hide();

        $(".change-img-1").hide();

        $(".change-img-4").hide();
        $(".change-img-5").hide();
        $(".change-img-6").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });

    $("#four").hover(function() {

        $(".change-img-4").show();

        $(".change-img-2").hide();

        $(".change-img-1").hide();
        $(".change-img-3").hide();
        $(".change-img-5").hide();
        $(".change-img-6").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });

    $("#five").hover(function() {

        $(".change-img-5").show();

        $(".change-img-2").hide();

        $(".change-img-1").hide();
        $(".change-img-3").hide();
        $(".change-img-4").hide();
        $(".change-img-6").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });


    $("#six").hover(function() {

        $(".change-img-6").show();

        $(".change-img-2").hide();

        $(".change-img-1").hide();
        $(".change-img-3").hide();
        $(".change-img-4").hide();
        $(".change-img-5").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });


});


// 検索画像変更シーはここから


$(function() {

    $("#sea-one").hover(function() {

        $(".change-img-11").show();

        $(".change-img-22").hide();

        $(".change-img-33").hide();
        $(".change-img-44").hide();
        $(".change-img-55").hide();
        $(".change-img-66").hide();
        // $(".change_text").text("赤い丸は情熱的ですね");

    });

    $("#sea-two").hover(function() {

        $(".change-img-22").show();

        $(".change-img-11").hide();

        $(".change-img-33").hide();
        $(".change-img-44").hide();
        $(".change-img-55").hide();
        $(".change-img-66").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });

    $("#sea-three").hover(function() {

        $(".change-img-33").show();

        $(".change-img-22").hide();

        $(".change-img-11").hide();

        $(".change-img-44").hide();
        $(".change-img-55").hide();
        $(".change-img-66").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });

    $("#sea-four").hover(function() {

        $(".change-img-44").show();

        $(".change-img-22").hide();

        $(".change-img-11").hide();
        $(".change-img-33").hide();
        $(".change-img-55").hide();
        $(".change-img-66").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });

    $("#sea-five").hover(function() {

        $(".change-img-55").show();

        $(".change-img-22").hide();

        $(".change-img-11").hide();
        $(".change-img-33").hide();
        $(".change-img-44").hide();
        $(".change-img-66").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });


    $("#sea-six").hover(function() {

        $(".change-img-66").show();

        $(".change-img-22").hide();

        $(".change-img-11").hide();
        $(".change-img-33").hide();
        $(".change-img-44").hide();
        $(".change-img-55").hide();
        // $(".change_text").text("青い丸は知的ですね");

    });


});
