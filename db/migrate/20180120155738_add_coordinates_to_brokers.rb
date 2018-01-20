class AddCoordinatesToBrokers < ActiveRecord::Migration[5.1]
  def change
    add_column :brokers, :latitude, :float
    add_column :brokers, :longitude, :float
  end
end
