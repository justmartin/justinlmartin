class ArticlesController < ApplicationController

  def articles
    @articles = Article.all
  end

end
