$(document).on('turbolinks:load', function() {
$(function() {
  function buildBook(item){
    var html = `<p>${item.volumeInfo.title}</p>
    <p>著者:${item.volumeInfo.authors}</p>
    <img src="${item.volumeInfo.imageLinks.thumbnail}">
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
      for (var i = 0; i < books.items.length; i++) {
           var item = books.items[i];
           var html = buildBook(item);
      $('.search-results').append(html)}
      $('.submit-btn').prop('disabled', false);
    });
  });

});
});