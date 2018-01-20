class AddBasicsToInformations < ActiveRecord::Migration[5.1]
  def change
    add_column :information, :email, :string
    add_column :information, :name, :string
    add_column :information, :role, :string
    add_column :information, :needed, :string
    add_column :information, :activity, :string
    add_column :information, :dev_activity, :string
    add_column :information, :description, :text
    add_column :information, :referer, :string
  end
end
