class PostsController < ApplicationController
  def index
    # @posts_url = fetch("https://www.googleapis.com/books/v1/volumes?q={search terms}")
    respond_to do |format|
      format.html
      format.json{render json: @posts}
    end
  end
end
