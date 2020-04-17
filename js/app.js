$(function(){

    //メニューバー背景切り替え
    var targetHeight = $('.js-float-menu-target').height() - 40;
    $(window).on('scroll', function(){
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

    //メニューが左右からフェードイン
    $(window).on('scroll',function(){
        //スクロール量を取得
        var scrollTop = $(window).scrollTop();  
        //eachを利用して「menues」クラスの要素それぞれに処理を行う
        $('.menues').each(function(){
            //ページ最上部から「menues」のついた要素までの距離を取得
            var offset_top = $(this).offset().top;
            var windowHeight = $(window).height();
            //スクロール量と要素の一からマージンを引いた値を比較
            if(scrollTop > offset_top - windowHeight){
                //スクロール量が所定の位置を超えた時にfadeinクラスを付与
                $(this).addClass('js-fadein');
            }else{
                //スクロール量が所定の位置を超えていない場合はクラスを外す
                $(this).removeClass('js-fadein');
                }
            });  
    });


    //スマートフォン時のメニュー開閉
    $('.js-toggle-sp-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.js-nav').toggleClass('active');
    });

    $('.nav-link').on('click',function(){
        $('.js-toggle-sp-menu').removeClass('active');
        $('.js-nav').removeClass('active');
    });

    //スムーズスクロール
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
     });
});