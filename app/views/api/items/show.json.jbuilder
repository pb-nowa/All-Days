 
@items.each  do |item|
    json.set! item["id"] do
        json.extract! item,"id", "color", "style", "name", "material", "price"
    end 
end

    