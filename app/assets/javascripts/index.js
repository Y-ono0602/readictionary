$(document).on('turbolinks:load', function() {
$(function() {
  function buildBook(item){
    var html = `<div class="book-info"><div class="top-info">
    <div class="top-info__left"><img class="book-image" src="${item.volumeInfo.imageLinks.thumbnail}"></div>
    <div class="top-info__right"><p>${item.volumeInfo.title}</p>
    <p>著者:${item.volumeInfo.authors}</p>
    <button class="btn" type="button">詳細をみる</button></div>
    </div></div>
    `
    return html;
  }

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
      console.log(books);
      for (var i = 0; i < books.items.length; i++) {
           var item = books.items[i];
           var html = buildBook(item);
      $('.search-results').append(html)}
      $('.submit-btn').prop('disabled', false);
    });
  });

});
});