class UpdateIndexConstraints < ActiveRecord::Migration[5.2]
  def change

    remove_index :artwork_shares, [:viewer_id, :artwork_id]
    remove_index :artworks, [:artist_id, :title]
    
    add_index :artwork_shares, [:viewer_id, :artwork_id], unique:true 
    add_index :artworks, [:artist_id, :title], unique:true
  end
end
