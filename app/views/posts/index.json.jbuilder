json.array! @posts do |post|
  json.id post.id
  json.title post.items.volumeInfo.title
  json.author post.items.volumeInfo.authors
  json.image post.items.imageLinks.smallThumbnail
end