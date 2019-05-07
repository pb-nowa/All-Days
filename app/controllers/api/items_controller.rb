class Api::ItemsController < ApplicationController
    def show
        @items = Item.find_by_gender(params[:id])
        render 'api/items/show'
    end

    def items_params
        params.require(:item).permit(:photo)
    end
end
