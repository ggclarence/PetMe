class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :profilePicUrl
      t.string :email
      t.string :bio

      t.timestamps
    end
  end
end