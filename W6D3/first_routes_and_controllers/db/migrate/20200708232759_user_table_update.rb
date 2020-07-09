class UserTableUpdate < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    remove_column :users, :email
    add_column :users, :user_name, :string, null:false, uniqueness: true 
  end
end
