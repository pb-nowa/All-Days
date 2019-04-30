# id	integer	not null, primary key
# email	string	not null, indexed, unique
# first_name	string	
# last_name	string	
# password_digest	string	not null
# session_token	string	not null, indexed, unique
# created_at	datetime	not null
# updates_at	datetime	not null

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name
      t.string :last_name
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, :email
  end
end
