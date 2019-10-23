$(document).on('turbolinks:load', function() {
$(function() {
  function buildBook(item){
    var html = `
    <div class="book-info">
      <div class="top-info">
        <div class="top-info__left"><img class="top-info__left__book-image" src="${item.volumeInfo.imageLinks.thumbnail}"></div>
        <div class="top-info__right">
        <p class="top-info__right__title">${item.volumeInfo.title}</p>
        <p class="top-info__right__author">著者:${item.volumeInfo.authors}</p>
        <p class="top-info__right__description">${item.volumeInfo.description}</p>
        <a href="https://www.amazon.co.jp/s?k=${item.volumeInfo.title}&i=stripbooks&__mk_ja_JP=カタカナ&ref=nb_sb_noss" target="_blank">
        <button class="top-info__right__btn">
        amazonで購入する</button></a>
        </div>
      </div>
    </div>
    `
    return html;
  }
        // <button class="top-info__right__btn" type="button">詳細をみる</button>
      //   <div class="bottom-info">
      //   <div class="bottom-info__title">概要</div>
      //   <div class="bottom-info__description">${item.volumeInfo.description}</div>
      //   <button class="bottom-info__btn">amazonで購入する</button>
      // </div>

  $('#search').on('submit',function(e){
    e.preventDefault();
    $(".search-results").empty();
    var input = $('#keyword').val();
    var href = 'https://www.googleapis.com/books/v1/volumes?q='+input

    fetch(href)
    .then(function(response) {
      return response.json();
    })
    .then(function(books) {
      for (var i = 0; i < books.items.length; i++) {
           var item = books.items[i];
           var html = buildBook(item);
      $('.search-results').append(html)}
      $('.submit-btn').prop('disabled', false);
    });
  });
});

$(document).on('submit', function(){
  const Target = $('.search-results').offset();
  var speed = 1350;
  $('body,html').animate({scrollTop:Target.top}, speed, 'swing');
  return false;
});

});
// Accordion機能
// $(function(){
//   // $('.book-info. .top-info .top-info__right .bottom-info').hide();
// 	$('.top-info__right__btn').click(function(){
//     console.log('test');
// 		//クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
// 		$(this).next('.bottom-info').slideToggle(400);
// 	});
// });

