class CreateGame < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.belongs_to :user
      t.integer :chances
      t.string :result
      t.integer :submarines
      t.timestamps
    
    end
  end
end
