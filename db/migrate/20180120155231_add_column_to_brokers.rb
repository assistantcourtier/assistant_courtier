class AddColumnToBrokers < ActiveRecord::Migration[5.1]
  def change
    add_column :brokers, :email, :string
    add_column :brokers, :name, :string
    add_column :brokers, :address, :string
    add_column :brokers, :role, :string
    add_column :brokers, :needed, :string
    add_column :brokers, :activity, :string
    add_column :brokers, :dev_activity, :string
    add_column :brokers, :description, :text
    add_column :brokers, :referer, :string
  end
end
