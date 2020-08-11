json.pokemon do 
    json.extract! @pokemon, :name, :defense, :attack, :poke_type, :moves 
    json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

