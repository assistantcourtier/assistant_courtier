class CreateBrokers < ActiveRecord::Migration[5.1]
  def change
    create_table :brokers do |t|

      t.timestamps
    end
  end
end
