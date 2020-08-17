json.array! @gifts do |gift|
    # json.title  gift.title
    # json.description gift.description

    json.extract! gift, :title, :description
end

