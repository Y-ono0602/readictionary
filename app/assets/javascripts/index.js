$(function() {
  function buildBook(post){
    var html = `<p>{{ items[0].volumeInfo.title }}</p>
    `
    return html;
  }

  $('#search').on('submit',function(e){
    e.preventDefault();
    var input = $('#keyword').val();
    var href = 'https://www.googleapis.com/books/v1/volumes?q='+input
    // fetch(href)
    // .then(function (response) {
    //   var html = buildBook(post);
    //   $('.search-results').append(html)
    // }).catch(function (error) {
    //   document.body.innerHTML = body;
    // });
    fetch(href)
    .then(response => {
      
    })
  });



  // $('#search').on('submit',function(e){
  //   e.preventDefault();
  //   var input = $('#keyword').val();
  //   var href = 'https://www.googleapis.com/books/v1/volumes?'+'q={input}'
  //   $.ajax({
  //     type:'GET',
  //     url: href,
  //     type: 'json'
  //   });
  //   // .done(function(posts){
  //   //   var html = buildBook(post);
  //   //   $('.search-results').append(html)
  //   // })
  //   // .fail(function(){
  //   //   alert('エラー');
  //   // });
  // });
});