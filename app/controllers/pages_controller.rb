class PagesController < ApplicationController
  def home
    @info = Information.new
    @infos = Information.all
  end
  def contact
      @broker = Broker.find(21)
        @markers = Gmaps4rails.build_markers(@broker) do |broker, marker|
        marker.lat broker.latitude
        marker.lng broker.longitude
    end
  end
end
