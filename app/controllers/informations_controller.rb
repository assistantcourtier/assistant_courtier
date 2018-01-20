class InformationsController < ApplicationController

  def new
    @info = Information.new
    redirect_to root_path
  end

  def create
    info = Information.new(info_params)
    if info.save!
      flash[:notice] = "Info successfully created"
     redirect_to root_path
   else
    flash[:alert] = "Erreur dans le formulaire"
    render :back
    end
  end

  def info_params
    params.require(:information).permit(:email, :first_name, :last_name, :role, :needed, :activity, :description, :referer)
  end

end
