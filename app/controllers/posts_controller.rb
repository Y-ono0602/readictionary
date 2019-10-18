class PostsController < ApplicationController
  def index
    binding.pry
    @posts = where("https://www.googleapis.com/books/v1/volumes?q={search terms}")
    respond_to do |format|
      format.html
      format.json{render json: @post}
    end
  end
end
