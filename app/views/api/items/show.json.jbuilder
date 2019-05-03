 
@items.each  do |item|
    json.set! item["id"] do
        json.extract! item, "color", "style", "name", "material", "price"
    end 
end

    