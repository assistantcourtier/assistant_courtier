class PagesController < ApplicationController
  def home
    @info = Information.new
    @infos = Information.all
  end
end
