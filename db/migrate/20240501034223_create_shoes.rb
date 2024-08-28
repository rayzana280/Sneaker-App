class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.string :name 
      t.integer :size
      t.string :color
      t.integer :price 
      t.string :image 
      t.boolean :inCart 
      t.integer :user_id 
    end 
  end
end
