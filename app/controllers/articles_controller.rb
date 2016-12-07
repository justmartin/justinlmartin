class ArticlesController < ApplicationController

  def articles
    @articles = Article.all.reverse
  end

end
