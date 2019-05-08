 
@items.each  do |item|
    json.set! item["id"] do
        json.extract! item, :id, :shoe_id, :color, :style, :name, :material, :price, :gender
        json.photoUrl url_for(item.photo) 
    end 
end

    