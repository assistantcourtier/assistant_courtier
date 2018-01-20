class PagesController < ApplicationController
  def home
    @info = Information.new
    @infos = Information.all
  end
  def contact
      @broker = Broker.where(email: "Mochin.Sonny@gmail.com")
        @markers = Gmaps4rails.build_markers(@broker) do |broker, marker|
        marker.lat broker.latitude
        marker.lng broker.longitude
    end
  end
def get_content_to_display
     #Place code here
     render :update do |page|
          page.replace_html "display_ajax", :partial => 'loading'
     end
end
end
