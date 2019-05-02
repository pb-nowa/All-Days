class Api::ItemsController < ApplicationController
    def show
        @items = Item.find_by_gender(params[:id])
        render :show
    end
end
