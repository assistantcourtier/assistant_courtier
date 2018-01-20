class BrokersController < ApplicationController


    def new
    @broker = Broker.new
    redirect_to root_path
  end

  def create
    broker = Broker.new(broker_params)
    if broker.save!
      flash[:notice] = "Broker successfully created"
     redirect_to root_path
   else
    flash[:alert] = "Erreur dans le formulaire"
    render :back
    end
  end

  def broker_params
    params.require(:broker).permit(:address, :email, :first_name, :last_name, :role, :needed, :activity, :description, :referer, :longitude, :latitude)
  end
end
